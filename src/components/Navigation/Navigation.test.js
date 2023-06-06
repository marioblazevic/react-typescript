import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const productsLink = screen.getByRole('link', { name: 'Products' });
    const usersLink = screen.getByRole('link', { name: 'Users' });
    const postsLink = screen.getByRole('link', { name: 'Posts' });
    const todoLink = screen.getByRole('link', { name: 'ToDo' });

    expect(productsLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
    expect(todoLink).toBeInTheDocument();
  });

  test('applies active class to active link', () => {
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Navigation />
      </MemoryRouter>
    );

    const usersLink = screen.getByRole('link', { name: 'Users' });
    const activeClass = 'active';

    expect(usersLink).toHaveClass(activeClass);
  });
});
