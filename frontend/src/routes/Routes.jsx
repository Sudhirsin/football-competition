import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Home from '../components/common/Home'
import SignUp from '../components/auth/SignUp'
import Login from '../components/auth/Login'
import TeamDetails from '../components/common/TeamDetails';
import { connect } from 'react-redux'


function Routes(props) {
    return (
        <React.Fragment>
            <Navbar {...props } />
            <Switch>
                !props.isAuth ? (
                    <Route exact path="/" component={(props) => <Home { ...props } />} />
                    <Route path="/user/register" component={() => <SignUp /> } />
                    <Route path="/user/login" component={(props) => <Login { ...props} />} />
                ) : (
                    <Route path="/user/team_details/:id" component={(props) => <TeamDetails { ...props } />} />

                )
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth  
})

export default connect(mapStateToProps, null)(Routes)
