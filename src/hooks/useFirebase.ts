import { useState, useContext, useCallback } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db, colRef, auth } from '../firebase-config';
import { AuthRequestFunction, EditProfileObject } from '../models/types';
import AuthContext from '../store/auth-context';
import UiContext from '../store/ui-context';
import ValidationSchema from '../models/validationSchema';

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const authCtx = useContext(AuthContext);
  const { showAlert } = useContext(UiContext);
  const { updateAccountSchema, updatePasswordSchema } = ValidationSchema;

  const authRequest: AuthRequestFunction = async (isLogin, values) => {
    const { email, password, firstName, lastName } = values;

    try {
      setIsLoading(true);
      const userCredentials = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      if (isLogin) {
        showAlert('success', 'Login Success!');
      } else {
        const id = userCredentials.user.uid;

        await setDoc(doc(colRef, id), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });

        showAlert('success', 'Account Created Successfully!');
      }
    } catch (err) {
      setIsLoading(false);
      showAlert('error', 'An Error Occured', err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      showAlert('info', 'Logged Out');
    } catch (err) {
      showAlert('error', 'Failed to Log Out', err);
    }
  };

  const getUserInfo = useCallback(async () => {
    const uid = authCtx.user!.uid;

    if (uid) {
      const docRef = doc(db, 'users', uid);

      try {
        const userDoc = await getDoc(docRef);
        const userData = userDoc.data();
        return userData;
      } catch (err) {
        showAlert('error', 'Failed to Load User Data', err);
      }
    } else {
      showAlert('error', 'No User ID');
      return;
    }
  }, [authCtx.user, showAlert]);

  const updateProfile = async (valuesObj: EditProfileObject) => {
    const { firstName, lastName, email } = valuesObj;
    const uid = authCtx.user!.uid;

    if (uid) {
      const docRef = doc(db, 'users', uid);
      setIsLoading(true);

      try {
        await updateAccountSchema.validate({ firstName, lastName, email });
        await updateDoc(docRef, {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        setIsLoading(false);
        showAlert('success', 'Account Details Saved');
      } catch (err) {
        setIsLoading(false);
        showAlert('error', 'Failed to Update Account Details', err);
      }
    } else {
      showAlert('error', 'No User ID');
      return;
    }
  };

  const setNewPassword = async (password: string) => {
    const user = auth.currentUser;

    setIsSending(true);

    try {
      await updatePasswordSchema.validate({ password });
      await updatePassword(user!, password);
      setIsSending(false);
      showAlert('success', 'Password Updated');
    } catch (err) {
      setIsSending(false);
      showAlert('error', 'An Error Occured', err);
    }
  };

  return {
    isLoading,
    isSending,
    authRequest,
    logout,
    getUserInfo,
    updateProfile,
    setNewPassword,
  };
};

export default useFirebase;
