import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavigationLinks extends Component {
  state = {};
  render() {
    return (
      <div className="navigation-links">
        <ul>
          <li>
            <i
              onMouseEnter={this.play}
              className="fa-flag1 fa fa-circle-o-notch fa-spin fa-1x fa-fw"
              aria-hidden="true"
            />
            <Link to="/">HOME</Link>
          </li>
          <li>
            <i
              onMouseEnter={this.play}
              className="fa-flag1 fa fa-circle-o-notch fa-spin fa-1x fa-fw"
              aria-hidden="true"
            />
            <Link to="/about">PROFILE</Link>
          </li>
          <li>
            <i
              onMouseEnter={this.play}
              className="fa-flag1 fa fa-circle-o-notch fa-spin fa-1x fa-fw"
              aria-hidden="true"
            />
            <Link to="/resume">RESUME</Link>
          </li>
          <li>
            <i
              onMouseEnter={this.play}
              className="fa-flag1 fa fa-circle-o-notch fa-spin fa-1x fa-fw"
              aria-hidden="true"
            />
            <Link to="/projects">PROJECTS</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationLinks;
