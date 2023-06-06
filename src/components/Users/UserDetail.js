import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import classes from './UsersList.module.css';
import { useRouteLoaderData } from 'react-router-dom';

const UserDetail = () => {
  const data = useRouteLoaderData('event-detail');
  return (
    <Container sx={{ py: 8 }} maxWidth="md" className={classes.container}>
      <Card sx={{ maxWidth: 345 }} className={classes.user} key={data.id}>
        <CardMedia
          component="img"
          alt="user image"
          height="140"
          image={data.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5>{data.firstName}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export async function loader({ params }) {
  const id = params.userId;
  console.log(id);
  const response = await fetch('https://dummyjson.com/users/' + id);
  return response;
}

export default UserDetail;
