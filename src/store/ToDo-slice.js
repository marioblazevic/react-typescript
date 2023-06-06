import { createSlice } from '@reduxjs/toolkit';

const ToDoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },
  reducers: {
    fillToDo(state, action) {
      state.todo = action.payload.todo.todos;
    },
    removeToDo(state, action) {
      const updatedToDo = state.todo.filter(
        (todo) => todo.id !== action.payload
      );
      state.todo = updatedToDo;
    },
    addTodo(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const updatedToDo = [newItem, ...state.todo];
      state.todo = updatedToDo;
    },
  },
});

export const ToDoActions = ToDoSlice.actions;

export default ToDoSlice;
