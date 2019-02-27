import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from './header';
import Resume from './resume';
import SkillComponents from './SkillComponent';
import SkillSection from './SkillSection';







class  Scroll extends Component {
  state = {  }
  render() { 
    return ( <React.Fragment>
      <Header/>
      <SkillSection/>
      <Resume/>
      </React.Fragment>
     );
  }
};
 


export default Scroll
    