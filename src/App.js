import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './home/login.component'
import Register from './home/register.compnent'
import ForgotPassword from './home/forgotpassword.component'
import Dashboard from './dash/dashboard.component'
import AddDrinks from './admin/AddDrinks'
import ViewDrinks from './admin/ViewDrinks'
import Profile from './dash/Profile'
import Notifications from './dash/Notifications'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/forgotpassword' component={ForgotPassword} />

        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/notifications' component={Notifications} />

        <Route exact path='/admin/add-drinks' component={AddDrinks} />
        <Route exact path='/admin/viewdrinks' component={ViewDrinks} />
      </Switch>
    )
  }
}
