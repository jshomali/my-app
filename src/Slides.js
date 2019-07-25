import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Collapsible from 'react-collapsible';

const triggerSiblingExample = () => <div className="Collapsible__custom-sibling">This is a sibling to the trigger which wont cause the Collapsible to open!</div>;

class Slides extends Component {
  render() {
    return (
      <div>
        <Collapsible className="header" trigger="What is the vehicle discount program?">
          <p>The GM College Discount allows current college or graduate students, or those who have graduated from a two or four year college within the past two years, the ability to purchase or lease eligible, new 2019 and 2018 Chevrolet, Buick and GMC vehicles at a special discounted price below MSRP. Plus, you can combine the discount with most current offers to save even more. When you build a vehicle to your exact specifications on this site, you can view MSRP and the GM College Discount price — simply follow the prompts.</p>
          <a id="button" href="https://www.gmcollegediscount.com/about-the-discount/">Learn more</a>

        </Collapsible>

        <Collapsible className="header" transitionTime={400} trigger="Who's eligible?">
          <p className="list">Must be a current college or graduate student or have graduated from a two or four year college within the past two years. You must produce one of the following:
          <p>Evidence of enrollment in an associate, undergraduate or graduate degree program.</p>
          <p>A diploma dated no more than two years before the vehicle purchase or lease, from a four-year bachelor’s degree, a two-year associate degree or a graduate degree program.</p>
          </p>
          <a id="button" href="https://www.gmcollegediscount.com/about-the-discount/">Learn more</a>

        </Collapsible>

        <Collapsible className="header" transitionTime={400} trigger="How do I get access?">
          <p>To use the discount, select “Get Authorization Number” and follow the prompts. Print out your authorization number and take it, along with evidence of enrollment or diploma dated no more than 2 years ago, to a participating Chevrolet, Buick or GMC Dealer to receive your vehicle discount.</p>
          <a id="button" href="https://www.gmcollegediscount.com/sign-in/">Get Authorization Number</a>
          <br></br>
          <br></br>
        </Collapsible>

      </div>
    );
  }
}

export default Slides;
