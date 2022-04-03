import { render, screen } from '../../test-utils';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';
import Home from './Home';
import AuthForm from '../Auth/AuthForm';

describe('<Home>', () => {
  it('should navigate to "/auth", when you click the Sign Up <Button>', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </MemoryRouter>
    );

    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);

    const authFormEmailInput = screen.getByLabelText('Email');
    expect(authFormEmailInput).toBeInTheDocument();
  });
});