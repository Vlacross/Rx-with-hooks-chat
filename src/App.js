import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FirstPerson } from './components';
import './index.css';
console.log('Appy')
const App = () => (

  <Router>
  <div>
    <h2>Getchemss</h2>
  
    <Switch>
      <Route exact path="/" component={FirstPerson} />
      <Route exact path="/first-person" component={FirstPerson} />
    </Switch>
  </div>
  </Router>
);

export default App;
