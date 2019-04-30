import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SkillSection from "./SkillSection";



class SectionLinks extends Component {
  

 

  render() {
    return (
      <div>
        <div className="social-links">
          {/* LinkedIn */}
          <a className="link-icons">
            <Link to="/about">
              <i
           
                className="fa-flag fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">PROFILE</span>
          </a>

          {/* Github */}
          {/* <a className="link-icons" target="_blank">
            <Link to="/resume">
              <i
                 
                className="fa-flag1 fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">RESUME</span>
          </a> */}

          {/* Freecodecamp */}
          <a className="link-icons" target="_blank">
            <Link to="/projects">
              <i
                
                className="fa-flag2 fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">PROJECTS</span>
          </a>

          {/* Youtube */}
          <a className="link-icons" target="_blank" href="mailto:fedamo@gmail.com?subject = Feedback&body = Message" rel="noopener noreferrer">
            
            <i
              
              className="fa-flag3 fa fa-circle-o-notch fa-spin fa-3x fa-fw"
              aria-hidden="true"
            />
            <span className="link-text">CONTACT</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SectionLinks;
