import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import classes from './UsersList.module.css';
import { useNavigate } from 'react-router-dom';

const UsersList = ({ users }) => {
  const navigate = useNavigate();

  const handleViewUser = (user) => {
    navigate(`${user.id}`, { state: user });
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md" className={classes.container}>
      {users.map((user) => (
        <Card
          sx={{ maxWidth: 345 }}
          className={classes.user}
          key={user.id}
          data-testid="user"
        >
          <CardMedia
            component="img"
            alt={user.image}
            height="140"
            image={user.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleViewUser.bind(null, user)} size="small">
              View
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default UsersList;
