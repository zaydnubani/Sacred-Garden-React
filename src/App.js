import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Faq from './pages/faq'
import Team from './pages/Team'
import Partners from './pages/Partners'
import Mint from './pages/Mint.js'
import Terms from './pages/Terms'
// import Shop from './pages/Shop'
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/faq">
        <Faq />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Route exact path="/partners">
        <Partners />
      </Route>
      <Route exact path="/mint">
        <Mint />
      </Route>
      <Route exact path="/terms">
        <Terms />
      </Route>
      {/* <Route exact path="/shop">
        <Shop />
      </Route> */}
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
};

export default App;
