import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'; 
import Create from './components/Create.Component';
import './App.css';

import Home from './components/Home.Component';
import Login from './components/Login.Component';
import Register from './components/Register.Component';
import UserRequirements from './components/UserRequirements.Component';


class App extends Component{
  render(){
     
    return(
     
      <Router>
      <div className = "App">
        <nav className = "navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        
          <div className = "collapse navbar-collapse" id="navbarSupportedContent">
            <ul className = "navbar-nav mr-auto">
              
              <li className = "nav-item">
                <Link to = {'/'} className="nav-link"> Home</Link>
              </li>
              <li className = "nav-item">
                <Link to = {'/create'} className="nav-link"> Create Profile</Link>
              </li>
              <li className = "nav-item">
                <Link to = {'/userrequirements'} className="nav-link"> Get Plan</Link>
              </li>
             </ul>
              <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul class="navbar-nav d-none d-lg-flex ml-2 order-3">
                  <li className = "nav-item">
                <Link to = {'/login'} className="nav-link"> Login</Link>
              </li>
              <li className = "nav-item">
                <Link to = {'/register'} className="nav-link"> Sign up</Link>
              </li>
                </ul>
             
          </div>
        </nav> <br/><br/><br/>

        <Switch>
          <Route exact path = '/create' component = {Create}/>
          <Route exact path = '/' component = {Home}/> 
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/userrequirements' component = {UserRequirements}/>
        </Switch>
      </div>
    </Router>

    
    );
  }
}

export default App;