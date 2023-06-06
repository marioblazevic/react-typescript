import { render, screen, fireEvent } from '@testing-library/react';
import PostItem from './PostItem';

describe('PostItem', () => {
  const post = { id: 1, title: 'Test Title', body: 'Test Body' };
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();

  beforeEach(() => {
    render(
      <PostItem post={post} onDelete={onDeleteMock} onEdit={onEditMock} />
    );
  });

  test('renders post title and body', () => {
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  test('calls onDelete callback when delete button is clicked', () => {
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalled();
  });

  test('calls onEdit callback when edit button is clicked', () => {
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalled();
  });
});
