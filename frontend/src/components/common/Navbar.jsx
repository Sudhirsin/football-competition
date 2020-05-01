import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         Forum Web App
    //       </Typography>
    //       <Link to="/user/register">
    //         <Button color="inherit" className="text-white">Register</Button>
    //       </Link>
    //       <Link to="/user/login">
    //         <Button color="inherit" className="text-white">
    //           {props.isAuth ? "Logout" : "Login"}
    //         </Button>
    //       </Link>
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <nav className='navbar bg-dark'>
      <h1>
        <Link to="/">
          <i className='fas fa-code'></i> FootBall
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/user/register">Register</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}


const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})


export default connect(mapStateToProps, null)(Navbar)