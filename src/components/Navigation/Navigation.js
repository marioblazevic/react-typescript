import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar className={classes.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
          to="/"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
          to="users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
          to="posts"
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
          to="todo"
        >
          ToDo
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
