import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ToDo from './ToDo';
import { ToDoActions } from '../../store/ToDo-slice';

describe('ToDo', () => {
  const todo = {
    id: '1',
    todo: 'Write unit tests',
    completed: false,
  };

  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: () => [todo],
      },
    });
    render(
      <Provider store={store}>
        <ToDo todo={todo} />
      </Provider>
    );
  });

  test('renders todo correctly', () => {
    const todoText = screen.getByText('Write unit tests');
    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    expect(todoText).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test('calls removeToDo action when delete button is clicked', () => {
    const removeToDoMock = jest.spyOn(ToDoActions, 'removeToDo');

    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    fireEvent.click(deleteButton);

    expect(removeToDoMock).toHaveBeenCalledWith('1');
  });
});
