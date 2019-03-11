import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import audio1 from "./audio/audio1.wav";
import audio2 from "./audio/audio2.wav";
import audio3 from "./audio/audio3.wav";
import audio4 from "./audio/audio4.wav";
import SkillSection from "./SkillSection";

const audio_tracks = [audio1, audio2, audio3, audio4];

class SectionLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      audio: audio1
    };

    this.url = audio1;
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({ play: true, pause: false });
    this.audio.play();
  };

  pause = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  };

  load = () => {
    this.setState({ play: false, pause: false });
    this.audio.load();
  };

  render() {
    return (
      <div>
        <div className="social-links">
          {/* LinkedIn */}
          <a className="link-icons">
            <Link to="/about">
              <i
                onMouseEnter={this.play}
                className="fa-flag fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">PROFILE</span>
          </a>

          {/* Github */}
          <a className="link-icons" target="_blank">
            <Link to="/resume">
              <i
                onMouseEnter={this.play}
                className="fa-flag1 fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">RESUME</span>
          </a>

          {/* Freecodecamp */}
          <a className="link-icons" target="_blank">
            <Link to="/projects">
              <i
                onMouseEnter={this.play}
                className="fa-flag2 fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                aria-hidden="true"
              />
            </Link>
            <span className="link-text">PROJECTS</span>
          </a>

          {/* Youtube */}
          <a className="link-icons" target="_blank">
            <i
              onMouseEnter={this.play}
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
