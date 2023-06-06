import { ToDoActions } from './ToDo-slice';

export const fetchToDoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/todos?limit=6');
      console.log(await response.json());
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const data = await response.json();
      return data;
    };

    try {
      const todoData = await fetchData();
      dispatch(
        ToDoActions.fillToDo({
          todo: todoData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
