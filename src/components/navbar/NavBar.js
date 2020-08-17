import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { firebaseSignOut } from './helper-firebase-sign-out'
import { useAuthDispatch } from '../../context/auth-context'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  containNavbar: {
    display: "flex",
    justifyContent: "spaceBetween",
  }
}));

export const NavBar = () => {

  const classes = useStyles();

  const dispatchAuth = useAuthDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    firebaseSignOut(history);
    dispatchAuth({
      isActive: false,
      activeUserData: {}
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Tu Quincena
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
