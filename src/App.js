import React from 'react';
import Background from './Background';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';
import NotFound from './NotFound';
import ProjectCard from './ProjectCard';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Background />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/404" component={NotFound} />
        <Route path="/card" component={ProjectCard} />
        <Redirect to="/404" />
        <Home />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
