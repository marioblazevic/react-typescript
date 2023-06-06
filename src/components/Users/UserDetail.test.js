import { render, screen } from '@testing-library/react';
import { useRouteLoaderData } from 'react-router-dom';
import UserDetail from './UserDetail';

jest.mock('react-router-dom', () => ({
  useRouteLoaderData: jest.fn(),
}));

describe('UserDetail', () => {
  const user = {
    id: 1,
    firstName: 'John',
    image: 'https://dummyimage.com/300x300/000/fff',
  };

  beforeEach(() => {
    useRouteLoaderData.mockReturnValue(user);
  });

  it('displays the user information', () => {
    render(<UserDetail />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      user.firstName
    );
    expect(screen.getByAltText('user image')).toHaveAttribute(
      'src',
      user.image
    );
  });
});
