import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { setLoggedIn, setLoggedOut } from './actions/index';


import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import UpdateRecipe from './components/UpdateRecipe';

import './App.css';


const App = (props) => {
  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     props.setLoggedIn();
  //   } else {
  //     props.setLoggedOut();
  //   }
  // }, [props])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div> 
           
        </div>
      <Switch>
        <PrivateRoute exact path="/userprofile" component={UserProfile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/update-recipe/:id">
          <UpdateRecipe />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { })(App);

