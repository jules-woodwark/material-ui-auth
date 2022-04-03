import { render, screen } from '../../test-utils';
import Footer from './Footer';

describe('<Footer>', () => {
  it('renders website Link', () => {
    render(<Footer />);

    const portfolioLink = screen.getByRole('link', { name: /my website/i });
    expect(portfolioLink).toBeInTheDocument();
  });

  it('renders GitHub profile link', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /my github profile/i });
    expect(githubLink).toBeInTheDocument();
  });
});
