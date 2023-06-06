import classes from './PostItem.module.css';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const PostItem = (props) => {
  return (
    <div className={classes.post}>
      <h4 className={classes.heading}>{props.post.title}</h4>
      <p className={classes.body}>{props.post.body}</p>
      <div className={classes.control}>
        <CardActions>
          <Button size="small" onClick={props.onEdit}>
            Edit
          </Button>
          <Button size="small" onClick={props.onDelete}>
            Delete
          </Button>
        </CardActions>
      </div>
    </div>
  );
};

export default PostItem;
