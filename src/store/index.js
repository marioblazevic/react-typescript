import { configureStore } from '@reduxjs/toolkit';
import ToDoSlice from './ToDo-slice';

const store = configureStore({
  reducer: { todo: ToDoSlice.reducer },
});

export default store;
