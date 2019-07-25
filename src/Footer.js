import React, {Component} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (

    <div id="footer">
      <div className="footerContent">
        <div style={{paddingTop:"30px"}}>
            sign up | Copyright & Trademark | GM Privacy Statement
        </div>
        <br/>
        <div>
          GM | 100 Renaissance Center | 482.A00.MAR | Detroit, MI 48265 | 1-800-521-7300
        </div>
        <br/>
        <div>
          2019 General Motors. All rights reserved.
        </div>
        <br/>
      </div>
    </div>
    );
  }
}

export default Footer;
