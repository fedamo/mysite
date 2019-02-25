import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SkillComponents from './SkillComponent';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

class SkillSection extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div>
                
                <section id="about">  
            <div className="row section-intro">
            <div className="col-twelve">
            <Fade top when={true}>
                <h5>About</h5>
                
                <h1>Food, Travel and Data Exploration.</h1>
           
                <div  className = 'skills-header-icons'>
                {/* LinkedIn */}
                <a className="link-icons-skills"
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                  <span className="link-text">ME</span>
                </a>
                <a className="link-icons-skills"
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  <span className="link-text">ME</span>
                </a>
                <a className="link-icons-skills"
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-soundcloud" aria-hidden="true" />
                  <span className="link-text">ME</span>
                </a>
                <a className="link-icons-skills"
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-slack" aria-hidden="true" />
                  <span className="link-text">ME</span>
                </a>
                
</div>
</Fade>
            </div>   		
            
        </div> 
        
        <div className="row about-content">
 
            <div className="col-six tab-full">
            <Fade left appear={true} when = {true} opposite={true}>
                <h3>Profile</h3>
                <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
 
                <ul className="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Juan Dela Cruz</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>September 28, 1987</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>Freelancer, Frontend Developer</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                        <span>www.kardswebsite.com</span>
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>me@kardswebsite.com</span>
                    </li>
 
                </ul> 
 </Fade>      </div>
 
            <div className="col-six tab-full">
            <Fade right>
                <h3>Skills</h3>
                
                <p className = "pre-plot">Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
                </Fade>
<div className="pltly-chart">
<Fade  bottom>
                <SkillComponents/>
                </Fade>
                </div>
                
               
            </div>
 
        </div>
 
        <div className="row button-section">
            <div className="col-twelve">
            <Fade left>
                <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                </Fade>
                <Fade right>
                <a href="#" title="Download CV" className="button button-primary">Download Resume</a>
                </Fade>
            </div>   		
        </div>
        </section>  
 </div>

      
        

            
         );
    }
}
 
export default SkillSection;