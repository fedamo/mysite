import React, { Component } from 'react';

class navButtons extends  Component {
    render() {
      return (
        <div>
        <div className="social-links">
                        {/* LinkedIn */}
                        <a
                          href="http://google.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
        
                        {/* Github */}
                        <a
                          href="http://google.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
        
                        {/* Freecodecamp */}
                        <a
                          href="http://google.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>
        
                        {/* Youtube */}
                        <a
                          href="http://google.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-youtube-square" aria-hidden="true" />
                        </a>
                      </div>
                      </div>
        
   );
}
}
  export default navButtons