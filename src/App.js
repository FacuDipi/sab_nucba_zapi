import React from 'react';
import { GlobalStyle } from './Styles/GoblalStyle';
import { Navbar } from './components/Navbar/Navbar';

import { useOpenFood } from './hooks/useOpenFood';
import { Orders } from './components/Orders/Orders';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  const opendFood = useOpenFood();

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Orders />
      <Switch>
        <Route exact path="/">
          <Home opendFood={opendFood} />
        </Route>
        <Route exact path="/checkout">
          <Checkout opendFood={opendFood} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
