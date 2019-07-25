import React, {Component} from 'react';
import logo from './Assets/whats_next.svg';
import truck from './Assets/trucktest.jpeg';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Icons from "@fortawesome/fontawesome-free-solid";
// import Projects from './Projects.js';

class Home extends Component {

  render() {
    return (
        <div className="main">
          <div className="parallax1"></div>
          <div className="main-text">
            <span id="main-span">Be prepared for Life after College.</span>
            <a id="auth-num" style={{cursor: "pointer"}}>Get Authorization Number</a>
          </div>
          <img src={logo} className="logo" alt="logo"/>

          <div className="test-parallax">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum egestas turpis id pulvinar. Mauris euismod, neque vitae dignissim malesuada, elit diam ultricies erat, quis dictum urna nulla a leo. Vivamus gravida justo sed mauris scelerisque, ut venenatis lacus malesuada. Nunc justo nisl, finibus at finibus ut, iaculis non risus. Nullam pulvinar odio ac nisi facilisis, pharetra aliquet ex condimentum. Cras efficitur interdum tellus vel auctor. Cras efficitur a sem eu vehicula. Vestibulum congue enim sed orci aliquam pellentesque. Vivamus hendrerit odio non porttitor tincidunt. Nullam non justo quis arcu maximus tempus nec vitae diam. Mauris eget neque ligula. Pellentesque laoreet, tortor sed hendrerit ultricies, felis velit ornare justo, a porttitor justo est eu risus. Ut felis neque, ornare at odio sit amet, tincidunt sodales dui. Donec in dui facilisis, volutpat mauris a, tempor nulla.
            <div className="parallax2">
              <div className="test-parallax2">
              <a id="intro" style={{textAlign: "left"}}> introducing </a>
              <h1> The Next Experiences </h1>
              <p> When signing up for the Vehicle Purchasing Program,
                  you're getting more than just a discount code.
                  You're getting access to a whole new social network of
                  experiences. Be included in the Next big Experience.</p>
              <a href="https://gm.com" style={{cursor: "pointer"}} id="access"> Get Access Today </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;

// <div className="parallax2">
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum egestas turpis id pulvinar. Mauris euismod, neque vitae dignissim malesuada, elit diam ultricies erat, quis dictum urna nulla a leo. Vivamus gravida justo sed mauris scelerisque, ut venenatis lacus malesuada. Nunc justo nisl, finibus at finibus ut, iaculis non risus. Nullam pulvinar odio ac nisi facilisis, pharetra aliquet ex condimentum. Cras efficitur interdum tellus vel auctor. Cras efficitur a sem eu vehicula. Vestibulum congue enim sed orci aliquam pellentesque. Vivamus hendrerit odio non porttitor tincidunt. Nullam non justo quis arcu maximus tempus nec vitae diam. Mauris eget neque ligula. Pellentesque laoreet, tortor sed hendrerit ultricies, felis velit ornare justo, a porttitor justo est eu risus. Ut felis neque, ornare at odio sit amet, tincidunt sodales dui. Donec in dui facilisis, volutpat mauris a, tempor nulla.
// </div>

//   <div className="box">
//     <img src={logo} className="logo" alt="logo"/>
//     <div className="box-text" style={{cursor:"pointer"}} onClick={() => this.setState({ status: !status, text: this.switchState.text })} >
//       <h1>{this.state.status}</h1>
//       <a><span className="button-text">{status ? "All that time spent worrying if the car isn't going to make it." : "There's no destination without a way to get there."}</span></a>
//       <ScrollAnimation animateIn="fadeInUp" animateOnce="true" offset="0" delay="0000" duration="0.5" className="arrow-movement">
//         <span style={{cursor:"pointer"}} onClick={this.switchState}><FontAwesomeIcon icon="angle-right" className="pulse" size="3x"/></span>
//       </ScrollAnimation>
//
//     </div>
//   </div>
// </div>

// <h1 onClick={this.switchState} style={{cursor:"pointer"}}>{this.state.title}</h1>
// <a style={{cursor:"pointer"}} onClick={this.switchState}><span className="button-text">{this.state.text}</span></a>
// <ScrollAnimation animateIn="fadeInUp" animateOnce="true" offset="0" delay="0000" duration="0.5" className="arrow-movement">
//   <span style={{cursor:"pointer"}} onClick={this.switchState}><FontAwesomeIcon icon="angle-right" className="pulse" size="3x"/></span>
// </ScrollAnimation>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
