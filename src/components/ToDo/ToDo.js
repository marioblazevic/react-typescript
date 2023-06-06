import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import classes from './ToDo.module.css';
import CheckIcon from '@mui/icons-material/Check';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { ToDoActions } from '../../store/ToDo-slice';

const ToDo = (props) => {
  const dispatch = useDispatch();
  const todoId = props.todo.id;

  const handleDeleteToDo = () => {
    dispatch(ToDoActions.removeToDo(todoId));
  };
  return (
    <Card sx={{ minWidth: 275 }} className={classes.todo}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {props.todo.todo}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.todo.completed === true ? <CheckIcon /> : ''}
        </Typography>
        <CardActions>
          <Button size="small" onClick={handleDeleteToDo}>
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ToDo;
