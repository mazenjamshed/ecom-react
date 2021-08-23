import './App.css';
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
