import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authetication/action'


function Navbar(props) {

  return (
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
          { props.isAuth ? <button className="btn btn-outline-danger" onClick={props.logoutUser}>Logout</button> :
            <Link to="/user/login">Login</Link>
          }
          
        </li>
      </ul>
    </nav>
  );
}


const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)