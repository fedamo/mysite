import React, { Component } from "react";
import Fade from "react-reveal";
import Zoom from "react-reveal/Zoom";
import SectionLinks from "./sectionlinks";
import NavigationLinks from "./NavigationLinks";
import Reveal from "react-reveal/Reveal";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/fonts.css";
import "../styles/vendor.css";

class Resume extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  state = {};
  render() {
    return (
      <div>
        <div className = 'resume-body'>
          <NavigationLinks />
          <section id="resume" className="grey-section">
            <div className="row section-intro" style={{marginBottom:0}}>
              <Fade top>
                <div className="col-twelve" >
                  <h5>Resume </h5>
                  <h1>Experience & Education.</h1>
                  
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
                        <i className="fa fa-fire" />
                      </div>
                      <div className="timeline-header">
                        <h3>Analytics Specialist</h3>
                        <p>July 2017 - Present</p>
                      </div>
                      <div className="timeline-content">
                        <h4>National Fire Protection</h4>
                        <p>
                          A mission driven organisation turning looking to the future with the new data initiatives
                           
             
                          
                        </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-tv" />
                      </div>
                      <div className="timeline-header">
                        <h3>Marketing Effectiveness Manager</h3>
                        <p>October 2016 - May 2017</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Virgin Media, Liberty Global</h4>
                        <p>
                          Forecasting and 
                        </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-bank" />
                      </div>
                      <div className="timeline-header">
                        <h3>Research Economist</h3>
                        <p>July 2014 - May 2016</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Royal Bank of Scotland</h4>
                        <p>
                          Developed products for the research team including forecast models for inflation and economic growth. 
                          
                       </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-bar-chart" />
                      </div>
                      <div className="timeline-header">
                        <h3>Analyst - Marketing Analytics & Insights</h3>
                        <p>July 2013 - June 2014</p>
                      </div>
                      <div className="timeline-content">
                        <h4>Gain Theory</h4>
                        <p>
                          A fantastic training program set the most invaluable groundwork for a career in data. This company has been using econometrics to find the best marketing mix for decades, back when they still used paper to print regressions results.
                          
                       </p>
                      </div>
                    </div>
                    {/* /timeline-block */}
                    {/* /timeline-block */}
                  </div>
                  {/* /timeline-wrap */}
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
                      <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                      <h3>Master Degree</h3>
                      <p>July 2011 - July 2012</p>
                    </div>
                    <div className="timeline-content">
                      <h4>Queen Mary University of London</h4>
                      <p>
                        Msc. Finance and Econometrics
                      </p>
                    </div>
                  </div>
                  {/* /timeline-block */}
                  <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-graduation-cap" />
                    </div>
                    <div className="timeline-header">
                      <h3>Bachelor Degree</h3>
                      <p>July 2014 - June 2015</p>
                    </div>
                    <div className="timeline-content">
                      <h4>City University of London</h4>
                      <p>
                        Bsc. Mathematics
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
