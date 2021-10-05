import React from 'react';
import img from '../img/01.png'
const About = () => {
  return (
    //creating about part
    <div className="container">
      <div className="row about d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img src={img} className="img-fluid w-75" alt="" />
        </div>
        <div className="col-lg-6 ">
          <h2 className="">Why Choose Learn With us ?</h2>
          <p>There are many variations of progress of course available, but the majority have suffered alteration in some form.Here you find the best courses.</p>
          <button className="btn btn-success">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;