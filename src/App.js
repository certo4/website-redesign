import React from 'react';
import Background from './Background';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';
import NotFound from './system-pages/NotFound';
import PersonalWebsite from './projects/PersonalWebsite';
import UniversalMachine from './projects/UniversalMachine';
import Gerp from './projects/Gerp';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Background />
      <Navigation />
      <Switch>
        <Route exact path="https://agile-sands-88978.herokuapp.com/" component={Home} />
        <Route path="https://agile-sands-88978.herokuapp.com/projects" component={Projects} />
        <Route exact path="https://agile-sands-88978.herokuapp.com/404" component={NotFound} />
        <Route path="https://agile-sands-88978.herokuapp.com/personal-website" component={PersonalWebsite} />
        <Route path="https://agile-sands-88978.herokuapp.com/um" component={UniversalMachine} />
        <Route path="https://agile-sands-88978.herokuapp.com/gerp" component={Gerp} />
        <Redirect to="https://agile-sands-88978.herokuapp.com/404" />
        <Home />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
