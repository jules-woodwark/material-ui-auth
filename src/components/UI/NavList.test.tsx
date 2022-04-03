import { render, screen } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';
import NavList from './NavList';

describe('<NavList>', () => {
  it('renders Login link if(isLoggedIn === false)', () => {
    render(
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <MemoryRouter initialEntries={['/']}>
          <NavList />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });

  it('renders Profile & Logout <button> if(isLoggedIn)', () => {
    render(
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <MemoryRouter initialEntries={['/']}>
          <NavList />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const profileLink = screen.getByRole('link', { name: /profile/i });
    const logoutBtn = screen.getByRole('button', { name: /logout/i });

    expect(profileLink).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });
});
