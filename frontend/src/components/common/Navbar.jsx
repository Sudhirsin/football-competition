import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authetication/action'


function Navbar(props) {

  const logout = () => {
    console.log(props)
    props.logoutUser() 
    // props.history.push('/user/login')
  }

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to="/">
          <i className='fas fa-code'></i> FootBall
        </Link>
      </h1>
      <ul>
        <li>
          <Link 
            to="/user/register"
            className="btn btn-outline-success text-dark"
          >
            Register
          </Link>
        </li>
        <li>
          { props.isAuth ? <button className="btn btn-outline-danger" onClick={ logout }>Logout</button> :
            <Link 
              to="/user/login"
              className="btn btn-outline-success text-dark"
            >Login</Link>
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