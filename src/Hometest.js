import React, {Component} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Slides from './Slides.js';
import logo from './Assets/whats_next.svg';

class Hometest extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="parallax-main"></div>
        <div className="main-text">
          <span id="main-span">Be prepared for Life after College.</span>
          <a id="auth-num" style={{cursor: "pointer"}}>Get Authorization Number</a>
        </div>
        <img src={logo} className="home-logo" alt="logo"/>
        <div className="home-parallax">
          You’ve been through so much, and it’s only the beginning. Graduating from college simply means starting the rest of your life, so be prepared. Whether you journey to a job, internship, master’s program or to another state just for the travel, make sure you enjoy just that: the journey. Don’t just get there, Drive There. Apply today to get your discount code for your new GM car.
        </div>
        <Slides/>
        <div className="parallax-two"></div>
        <div className="main-text-two">
          We get it. Somethings can be a total mystery. Credit scores are impossible to understand, what car to buy can be impossible to decide, but these things don’t have to stay a mystery. Here, you can learn everything you need to know to start your life after college. Search your question now for certified answers on almost every topic of life beyond school.
        </div>
      </div>
    );
  }
}

export default Hometest;
