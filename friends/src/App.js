import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './comps/Login';
import PrivateRoute from './comps/Private';
import UserInt from './comps/UserInt';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
          <PrivateRoute exact path="/protected" component={UserInt}/> 
      </Switch>
      
    </div>
  );
}

export default App;
