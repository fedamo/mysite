import React, { Component } from "react";
import ReactRevealText from "react-reveal-text";
import Fade from "react-reveal/Fade";
import SectionLinks from "./sectionlinks";


class Header extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    console.log("true");
    this.setState({ show: true });
  }

  onMouseLeave() {
    console.log("false");
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <div className="bgStyles">
            <h1>
              <ReactRevealText className="textStyles" show={this.state.show}>
                WELCOME TO MY SITE
              </ReactRevealText>
            </h1>

            <Fade bottom>
              <SectionLinks />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
