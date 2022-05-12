import { useContext, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AuthContext from './store/auth-context';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import Layout from './components/UI/Layout';
import theme from './styles/theme';

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
          <Route path="/material-ui-auth" element={<HomePage />} />
          <Route
            path="/material-ui-auth/auth"
            element={
              <Suspense fallback={<CircularProgress />}>
                {!isLoggedIn ? <AuthPage /> : <ProfilePage />}
              </Suspense>
            }
          />
          <Route
            path="/material-ui-auth/profile"
            element={
              <Suspense fallback={<CircularProgress />}>
                {isLoggedIn ? (
                  <ProfilePage />
                ) : (
                  <Navigate to="/material-ui-auth/auth" replace />
                )}
              </Suspense>
            }
          />
          <Route
            path="*"
            element={<Navigate to="/material-ui-auth" replace />}
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
