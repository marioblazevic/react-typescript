import { render, screen, fireEvent } from '@testing-library/react';
import PostsContext from '../../store/posts-contex';
import PostsList from './PostsList';

const posts = [
  { id: '1', title: 'Post 1', content: 'Content 1' },
  { id: '2', title: 'Post 2', content: 'Content 2' },
  { id: '3', title: 'Post 3', content: 'Content 3' },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: jest.fn(() => posts),
}));

describe('PostsList', () => {
  const mockFillPosts = jest.fn();
  const mockDeletePost = jest.fn();
  const mockOnEditPost = jest.fn();

  beforeEach(() => {
    render(
      <PostsContext.Provider
        value={{
          posts: posts,
          fillPosts: mockFillPosts,
          deletePost: mockDeletePost,
        }}
      >
        <PostsList onEditPost={mockOnEditPost} />
      </PostsContext.Provider>
    );
  });

  it('renders a list of posts', () => {
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Post 3')).toBeInTheDocument();
  });

  it('calls the deletePost function when a post is deleted', () => {
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(mockDeletePost).toHaveBeenCalledWith('1');
  });

  it('calls the onEditPost function when a post is edited', () => {
    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);
    expect(mockOnEditPost).toHaveBeenCalledWith({ post: posts[0] });
  });
});
