import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Switch } from 'react-router';
import TransitionSwitch from "react-router-transition-switch";
import Fader from "react-fader";
import Scroll from "./components/scrollpage";
import Fade from "react-reveal/Fade";
import Header from "./components/header";
import "./App.css";
import SkillSection from "./components/SkillSection";
import Resume from "./components/resume";
import NavigationLinks from './components/NavigationLinks';
import Projects from './components/projects';
import { createHashHistory } from 'history'

const browserHistory = createHashHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} >
          <TransitionSwitch fadeInTransitionDuration={10} component={Fader}>
            <Route exact path="/" component={Header} />
            <Route path="/about" component={SkillSection} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects}/>
          </TransitionSwitch>
        </Router>
      </div>
    );
  }
}

export default App;
