import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Main CSS file for page
import './Contact.css';

//Imports needed components
import Header from '../components/Header';
import Footer from '../components/Footer';

//Gallery images should be 1024x768

export default class Contact extends Component { 
	state = { 
	}
	
	render () {                                   
		return (
			<div id='container'>
				<Helmet>
					<title>CorgiDev: Contact Page</title>
				</Helmet>
				<Header />
				<div id='wrapper'>
					<section id="primary">
						<h3 id="contactHeader">General Information</h3>
						<p>I am not currently looking for any new employment opprotunities, but I am available for speaking engagements and other events. If you have questions, don't hesitate to contact me!</p>
						<p id="bottomP"> Email and LinkedIn are the best ways to reach me. Speaking of which, you can use the form on this page to send me a quick email.</p>
						
						<h3 id="contactDetails">Contact Details</h3>
						<ul className="contact-info">
							<li className="phone"><a href="tel:502-899-2384">(502)899-2384 (work)</a></li>
							<li className="linkedin"><a href="https://www.linkedin.com/in/egraytech/">EGrayTech LinkedIn Profile</a></li>
							<li className="mail"><a href="mailto:corgidev@outlook.com?subject=Email from CorgiDev site">corgidev@outlook.com</a></li>
							<li className="twitter"><a href="https://twitter.com/intent/tweet?screen_name=egraytech">@egraytech</a></li>
							<li className="github"><a href="https://github.com/EGrayTech" target="_blank" rel="noopener noreferrer">EGrayTech GitHub Profile</a></li>
						</ul>
					</section>

					<section id="secondary">
						<h3 id="contactHeader">Contact Form</h3>
						<p>This form is not 100% functional right now. I am working to quickly correct this issue. If you have trouble submitting, email me directly at <a href="mailto:corgidev@outlook.com" className="highlight">corgidev@outlook.com</a>.</p>
						<form id="contactForm" name="contactForm" action="mailto:corgidev@outlook.com?subject=CorgiDev Contact Form" method="post" enctype="text/plain">
							<label for="userName">Name: </label><input type="text" name="userName" id="userName" required /><br />
							<label for="userEmail">Email: </label><input type="email" name="userEmail" id="userEmail" required /><br />
							<label for="userMessage">Comments: </label><textarea name="userMessage" cols="40" rows="10" maxlength="1000" id="userMessage" required></textarea><br />
							<button type="submit">Submit</button> <button type="reset" value="Reset">Reset</button>
						</form>
					</section>
					<Footer />
				</div>
			</div>
		)
	}
}