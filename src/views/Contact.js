import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Main CSS file for page
import './Contact.css';

//Imports needed components
import Header from '../components/Header';
import ContactInfo from './ContactInfo';
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
					<ContactInfo />

					<section id="secondary">
						<h3 id="contactHeader">Contact Form</h3>
						<p>This form is not 100% functional right now. I am working to quickly correct this issue. If you have trouble submitting, email me directly at <a href="mailto:corgidev@outlook.com" className="highlight">corgidev@outlook.com</a>.</p>
						<form id="contactForm" name="contactForm" action="mailto:corgidev@outlook.com?subject=CorgiDev Contact Form" method="post" enctype="text/plain">
							<label for="userName">Name: </label><input type="text" name="userName" id="userName" required /><br />
							<label for="userEmail">Email: </label><input type="email" name="userEmail" id="userEmail" required /><br />
							<label for="userMessage">Comments: </label><textarea name="userMessage" cols="40" rows="10" maxlength="1000" id="userMessage" required></textarea><br />
							<button type="submit" className="btn btn-primary">Submit</button> <button type="reset" value="Reset" className="btn btn-warning">Reset</button>
						</form>
					</section>
					<Footer />
				</div>
			</div>
		)
	}
}