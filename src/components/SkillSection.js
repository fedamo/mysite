import React, { Component } from "react";
import SkillComponents from "./SkillComponent";
import Fade from "react-reveal/Fade";
import NavigationLinks from "./NavigationLinks";
import myIMG from './images/me.jpg';
import "../styles/base.css";
import "../styles/main.css";
import "../styles/fonts.css";
import "../styles/vendor.css";
class SkillSection extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  state = {};
  render() {
    return (
      <div className = 'skills-body'>
        <NavigationLinks />
        <section id="about">
          <div className="row section-intro">
            <div className="col-twelve">
              <Fade top when={true}>
              
                

                <h1 style={{paddingBottom:0}}>Hello, I'm Waylon.</h1>
            
                <div className="skills-header-icons">
                  {/* LinkedIn */}
                  <a
                    className="link-icons-skills"
                    href="https://www.github.com/fedamo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                  <a
                    className="link-icons-skills"
                    href="https://www.linkedin.com/in/waylon-sittampalam"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a
                    className="link-icons-skills"
                    href="https://www.soundcloud.com/fedamo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-soundcloud" aria-hidden="true" />
                  </a>
                  <a
                    className="link-icons-skills"
                    href="https://medium.com/@fedamo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-medium" aria-hidden="true" />
                  </a>
                </div>
                <p className = 'quote1' >"There's a way to do it better - find it."</p>
                <p className='quote2'>    THOMAS EDISON</p>
              </Fade>
              <div class="intro-info">

   				<img src={myIMG} alt="Profile Picture"/>

   				<p className="lead">
           
           I <span style={{fontWeight: 'bold'}}>deliver</span> connectivity between clients and their data. 

          I <span style={{fontWeight: 'bold'}}>love</span> finding solutions using the latest tech, informing decisions through clear narratives and compelling designs.  
</p>
   			</div>   			

            </div>
          </div>

          <div className="row about-content">
          
            <div className="col-six tab-full">
            
              <Fade left appear={true} when={true} opposite={true}>
                <h3>Lowdown</h3>
                <p style={{paddingBottom:25}}>
                7+ years analytics experience within Economics, Marketing, Telecoms and non-profit fields. 
                </p>

                <ul className="info-list">
                  <li>
                    
                    <strong>Fullname:</strong>
                    <span>Waylon James</span>
                  </li>
                  <li>
                    <strong>Current Location:</strong>
                    <span>Boston, MA</span>
                  </li>
                  <li>
                    <strong>Role:</strong>
                    <span>Data Specialist</span>
                  </li>
                  <li>
                    <strong>Website:</strong>
                    <span>fedamo.github.io/mysite</span>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <span>fedamo@gmail.com</span>
                  </li>
                </ul>
              </Fade>{" "}
            </div>

            <div className="col-six tab-full">
              <Fade right>
                <h3>Skills</h3>

                <p className="pre-plot">
                  I continue to learn new skills to optimize my workflow. Here are a few of my favourite tools:
                </p>
              </Fade>
              
              <div className="pltly-chart">
                <Fade bottom>
                  <SkillComponents />
                </Fade>
              </div>
            </div>
          </div>

          <div className="row button-section">
            <div className="col-twelve">
              <Fade left>
                <a
                  href="mailto:fedamo@gmail.com?subject = Feedback&body = Message"
                  title="Hire Me"
                  className="button stroke smoothscroll"
                >
                  Hire Me
                </a>
              </Fade>
              <Fade right>
                <a
                  href="./data/resume.pdf"
                  title="Download CV"
                  className="button button-primary"
                  download
                >
                  Download Resume
                </a>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SkillSection;
