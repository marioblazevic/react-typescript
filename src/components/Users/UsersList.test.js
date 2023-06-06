import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UsersList from './UsersList';

const users = [
  {
    id: 1,
    firstName: 'John',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    firstName: 'Jane',
    image: 'https://via.placeholder.com/151',
  },
];

describe('UsersList', () => {
  test('displays list of users', () => {
    render(
      <MemoryRouter>
        <UsersList users={users} />
      </MemoryRouter>
    );

    const userElements = screen.getAllByTestId('user');
    expect(userElements.length).toBe(users.length);
  });

  test('displays user information', () => {
    render(
      <MemoryRouter>
        <UsersList users={users} />
      </MemoryRouter>
    );

    users.forEach((user) => {
      const userElement = screen.getByText(user.firstName);
      expect(userElement).toBeInTheDocument();

      const imageElement = screen.getByAltText(user.image);
      expect(imageElement).toBeInTheDocument();
    });
  });
});
