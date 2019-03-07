import React, { Component } from "react";
import Fade from "react-reveal";
import Zoom from "react-reveal/Zoom";
import SectionLinks from "./sectionlinks";
import NavigationLinks from "./NavigationLinks";
import Reveal from "react-reveal/Reveal";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavigationLinks />
          <section id="resume" className="grey-section">
            <div className="row section-intro">
              <Fade top>
                <div className="col-twelve">
                  <h5>Resume</h5>
                  <h1>My story so far.</h1>
                  <p className="lead">
                    "There's a way to do it better. Find it"  
                  </p>
                </div>
              </Fade>
            </div>
            {/* /section-intro*/}
            <div className="row resume-timeline">
              <Zoom>
                <div className="col-twelve resume-header">
                  <h2>Work Experience</h2>
                </div>
                {/* /resume-header */}
                <div className="col-twelve">
                  <div className="timeline-wrap">
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="timeline-header">
                        <h3>UI Designer</h3>
                        <p>July 2015 - Present</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Awesome Studio</h4>
                        <p>
                          Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                          in magna consectetur nisi cupidatat laboris esse
                          eiusmod deserunt aute do quis velit esse sed Ut
                          proident cupidatat nulla esse cillum laborum occaecat
                          nostrud sit dolor incididunt amet est occaecat nisi.
                        </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="timeline-header">
                        <h3>Front-end Developer</h3>
                        <p>July 2014 - June 2015</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Super Cool Agency</h4>
                        <p>
                          Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                          in magna consectetur nisi cupidatat laboris esse
                          eiusmod deserunt aute do quis velit esse sed Ut
                          proident cupidatat nulla esse cillum laborum occaecat
                          nostrud sit dolor incididunt amet est occaecat nisi
                          incididunt.
                        </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="timeline-header">
                        <h3>Web Designer</h3>
                        <p>May 2013 - June 2014</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Great Designs Studio</h4>
                        <p>
                          Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                          in magna consectetur nisi cupidatat laboris esse
                          eiusmod deserunt aute do quis velit esse sed Ut
                          proident cupidatat nulla esse cillum laborum occaecat
                          nostrud sit dolor incididunt amet est occaecat nisi
                          incididunt.
                        </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                  </div>
                  O{/* /timeline-wrap */}
                </div>
                {/* /col-twelve */}
              </Zoom>
            </div>
            {/* /resume-timeline */}
            <div className="row resume-timeline">
              <div className="col-twelve resume-header">
                <h2>Education</h2>
              </div>
              {/* /resume-header */}
              <div className="col-twelve">
                <div className="timeline-wrap">
                  <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                      <h3>Master Degree</h3>
                      <p>July 2015 - Present</p>
                    </div>
                    <div className="timeline-content">
                      <h4>University of Life</h4>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>
                  {/* /timeline-block */}
                  <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                      <h3>Bachelor Degree</h3>
                      <p>July 2014 - June 2015</p>
                    </div>
                    <div className="timeline-content">
                      <h4>State Design University</h4>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi incididunt.
                      </p>
                    </div>
                  </div>
                  {/* /timeline-block */}
                  <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                      <h3>Bachelor Degree</h3>
                      <p>May 2013 - June 2014</p>
                    </div>
                    <div className="timeline-content">
                      <h4>Design College</h4>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi incididunt.
                      </p>
                    </div>
                  </div>
                  {/* /timeline-block */}
                </div>
                {/* /timeline-wrap */}
              </div>
              {/* /col-twelve */}
            </div>
            {/* /resume-timeline */}
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;
