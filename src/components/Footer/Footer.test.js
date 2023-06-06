import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer correctly', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('heading', { name: 'Levi9' });
    const titleElement = screen.getByText('Levi9');

    expect(footerElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
