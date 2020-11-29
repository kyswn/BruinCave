import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Recommend from './components/pages/Recommend';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import ProfileDisplay from './components/pages/ProfileDisplay';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/recommend' component={Recommend} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/recommendJoe%20Bruin' component={ProfileDisplay} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
