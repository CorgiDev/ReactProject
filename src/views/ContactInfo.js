import React, { Component } from 'react';

//Import my CSS
import './ContactInfo.css';

//import the images I need for my contact info
import PhoneImage from '../components/img/android-color.png';
import LinkedInImage from '../components/img/linkedin-color.png';
import MailImage from '../components/img/google-color.png';
import TwitterImage from '../components/img/twitter-color.png';
import GitHubImage from '../components/img/github-color.png';

//Variables to represent my image paths
var phoneImage = {
    backgroundImage: "url(" + PhoneImage + ")"
};
var linkedInImage = {
    backgroundImage: "url(" + LinkedInImage + ")"
};
var mailImage = {
    backgroundImage: "url(" + MailImage + ")"
};
var twitterImage = {
    backgroundImage: "url(" + TwitterImage + ")"
};
var gitHubImage = {
    backgroundImage: "url(" + GitHubImage + ")"
};

export default class ContactInfo extends Component { 
  state = { 
  }
    render () {                                   
        return (
            <section id="primary">
                <h3 id="contactHeader">General Information</h3>
                <p>I am not currently looking for any new employment opprotunities, but I am available for speaking engagements and other events. If you have questions, don't hesitate to contact me!</p>
                <p id="bottomP"> Email and LinkedIn are the best ways to reach me. Speaking of which, you can use the form on this page to send me a quick email.</p>
                
                <h3 id="contactDetails">Contact Details</h3>
                <ul className="contact-info">
                    <li className="phone"><a href="tel:502-899-2384" ariaDisabled="true" style={phoneImage}>No phone number currently</a></li>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/corgidev/" style={linkedInImage}>Elizabeth Gray LinkedIn Profile</a></li>
                    <li className="mail"><a href="mailto:corgidev@outlook.com?subject=Email from CorgiDev site"style={mailImage}>corgidev@outlook.com</a></li>
                    <li className="twitter"><a href="https://twitter.com/intent/tweet?screen_name=egraytech" style={twitterImage}>@egraytech</a></li>
                    <li className="github"><a href="https://github.com/CorgiDev" target="_blank" rel="noopener noreferrer" style={gitHubImage}>CorgiDev GitHub Profile</a></li>
                </ul>
            </section>
        )
   }
}