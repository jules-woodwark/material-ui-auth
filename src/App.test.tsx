import { render, screen } from './test-utils';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { AuthContext } from './store/auth-context';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

describe('<App>', () => {
  it('renders <HomePage> when path === "/"', () => {
    render(
      <MemoryRouter initialEntries={['/material-ui-auth']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );

    const welcomeText = screen.getByText(/hi, welcome to material ui auth/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it('renders <AuthPage> when path === "/auth"', () => {
    render(
      <MemoryRouter initialEntries={['/material-ui-auth/auth']}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('renders <ProfilePage> if path === "/profile and User', () => {
    render(
      <AuthContext.Provider value={{ user: { uid: 'random' } }}>
        <MemoryRouter initialEntries={['/profile']}>
          <Routes>
            <Route path="/material-ui-auth/auth" element={<AuthPage />} />
            <Route path="/material-ui-auth/profile" element={<ProfilePage />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const saveAccDetailsBtn = screen.getByRole('button', {
      name: /save account details/i,
    });
    expect(saveAccDetailsBtn).toBeInTheDocument();
  });
});
