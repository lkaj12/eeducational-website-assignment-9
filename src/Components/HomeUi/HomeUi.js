import React from 'react';
import img from '../img/02.png'
import './HomeUi.css'

const HomeUi = () => {
  return (
    //homepage first part
      <div className="container ">
        <div className='ui'>
        <img className="img-fluid" src={img} alt="" />
        
         <div className="half-width">
          <h1>Learn Everyday & Any <br /> New Skills Online with <br /> Top Instructors.</h1>
          <h5 className="text-muted">Learning is easy now.course starts at only $13.99.</h5>
        </div>
        </div>
      <h3 className="text-center">Explore our Popular Courses.</h3>
    </div>
  );
};

export default HomeUi;