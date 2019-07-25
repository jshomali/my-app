import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <Navbar bg="light" className="nav fixed-top">
        <Navbar.Brand style={{cursor: "pointer"}} href="https://www.gm.com/" className="discount-link"><span>G E N E R A L </span></Navbar.Brand>
        <Navbar.Brand style={{cursor: "pointer"}} href="https://www.gm.com/" className="discount-link-2">M O T O R S</Navbar.Brand>
        <Navbar.Brand style={{cursor: "pointer"}} href="https://www.gmcollegediscount.com/sign-in" className="code-link">ACCESS CODE</Navbar.Brand>
        <Navbar.Brand style={{cursor: "pointer"}} href="https://www.gmcollegediscount.com/build-and-price/" className="vehicle-link">VEHICLES</Navbar.Brand>
        <hr className="line-text" data-content="COLLEGE DISCOUNT"></hr>
      </Navbar>
    );
  }
}

export default Nav;
