import React from 'react';
import './content.css'
import logo from '../../assets/resume.svg'
const Content = () => {
    
return(
    <div className="container">
    <div className="content row align-items-center">
       <div className="content-header col-sm-12 col-md-6">
           <div className="content-main">
           <p>
            Need a Job   
           </p>
           <p>
               Don't Worry We are with you.
           </p>
           <p>Create a Stunning Resume and land to a job.</p>
           </div>
           <button className="btn btn-primary">Create Resume</button>
       </div>
       <div className="content-image col-sm-12 col-md-6">
          <img src={logo} alt="resume" style={{width:'100%'}}></img>
       </div>
    </div>
    </div>
)
}
export default Content;
