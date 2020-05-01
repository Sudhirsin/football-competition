import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Home from '../components/common/Home'
import SignUp from '../components/auth/SignUp'
import Login from '../components/auth/Login'


function Routes() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/register" component={SignUp} />
                <Route path="/user/login" component={Login} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes
