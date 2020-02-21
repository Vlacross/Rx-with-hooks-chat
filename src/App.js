import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Person, AnotherPerson, PersonSwitch } from './components';
import './index.css';
console.log('Appy')
const App = () => (

  <Router>
  <div>
    <h2>Getchemss</h2>
  
    <PersonSwitch />
    <Switch>
      <Route exact path="/" component={AnotherPerson} />
      <Route exact path="/first-person" component={Person} />
      <Route exact path="/second-person" component={AnotherPerson} />
    </Switch>
  </div>
  </Router>
);

export default App;
