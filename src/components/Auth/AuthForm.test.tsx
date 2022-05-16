import { render, screen } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AuthForm from './AuthForm';

describe('<AuthForm>', () => {
  it('renders login form by default', () => {
    render(
      <MemoryRouter initialEntries={['/auth']}>
        <AuthForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginBtn = screen.getByRole('button', { name: /login/i });
    const toggleFormBtn = screen.getByRole('button', {
      name: /create a new account/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(toggleFormBtn).toBeInTheDocument();
  });

  it('renders sign-up form when toggle form <button> clicked', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/auth']}>
        <AuthForm />
      </MemoryRouter>
    );

    const toggleFormBtn = screen.getByRole('button', {
      name: /create a new account/i,
    });
    await user.click(toggleFormBtn);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const signUpBtn = screen.getByRole('button', { name: /sign up/i });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signUpBtn).toBeInTheDocument();
  });
});
