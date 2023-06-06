import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  test('renders ProductsList component without crashing', () => {
    render(<ProductsList />);
  });
  test('renders loading message when products are being fetched', async () => {
    render(<ProductsList />);
    const loadingElement = await screen.findByText(/Loading.../);
    expect(loadingElement).toBeInTheDocument();
  });
});
