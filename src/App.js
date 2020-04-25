import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage'

const Hatspage = ({match}) => {
  console.log(match);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={Hatspage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
