import React, { Component } from "react";
import '../styles/banner.css';

class Banner extends Component {
  state = {};
  render() {
    return (
        <div className = 'banner-section'>
        <div className="ban-header">
      
        <div className="ban-info">
        
          <h1 className='ban-h1'>PROJECTS & DEMOS</h1>
          <h4 className ='ban-h4'>Data Viz   |   Modelling   |   EDA </h4>
          
        </div>
      </div>
     
     </div>
    );
  }
}

export default Banner;
