import { useContext, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/UI/Layout';
import theme from './styles/theme';
import AuthContext from './store/auth-context';

import CircularProgress from '@mui/material/CircularProgress';
import HomePage from './pages/HomePage';
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth"
            element={
              <Suspense fallback={<CircularProgress />}>
                {!isLoggedIn ? <AuthPage /> : <ProfilePage />}
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<CircularProgress />}>
                {isLoggedIn ? <ProfilePage /> : <Navigate to="/auth" replace />}
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
