import { useEffect } from 'react';
import { fetchToDoData } from '../../store/ToDo-actions';
import classes from './ToDoList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ToDo from './ToDo';
import DialogButton from '../../UI/DialogButton';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

const ToDoList = (props) => {
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDoData());
  }, [dispatch]);

  const logOutHandler = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={classes.container}>
      <DialogButton onOpen={props.onOpenDialog}>Create new ToDo</DialogButton>
      {todos.map((todo) => (
        <ToDo className={classes.todo} key={todo.id} todo={todo} />
      ))}
      <Button onClick={logOutHandler}> Log out </Button>
    </div>
  );
};

export default ToDoList;
