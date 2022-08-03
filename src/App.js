import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Faq from './pages/faq'
import Team from './pages/Team'
import Roadmap from './pages/Roadmap';
import Partners from './pages/Partners';
import Flora from './pages/Flora';
import Mint from './pages/Mint.js';
import Terms from './pages/Terms';

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
        <Route exact path="/Roadmap">
          <Roadmap />
        </Route>
        <Route exact path="/Partners">
          <Partners />
        </Route>
        <Route exact path="/Flora">
            <Flora />
        </Route>
        <Route exact path="/Mint">
          <Mint />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
      </Router>
  );
};

export default App;
