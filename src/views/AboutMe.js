import React, { Component } from 'react';

//Main CSS file for page
import './AboutMe.css';

//Imports needed components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class AboutMe extends Component { 
	state = { 
	}
	
	render () {                                   
		return (
		  	<div id='container'>
				<Header />
				<div id='wrapper'>
					<section>
                		<img src="img/beth2.jpg" alt="Photograph of Elizabeth Gray." className="profile-photo" />
                		<h3>About</h3>
                		<p>Hi, my name is Elizabeth Gray! This is my portfolio where I will post snippets of coding work as I learn. I also enjoy traveling, video games, reading fantasy and sci-fi books, drinking cafe lattes, and more.</p>
                		<p>Want to follow me on Twitter? My username is <a href="https://www.twitter.com/egraytech">@egraytech.</a></p>
            		</section>
					<Footer />
				</div>
			</div>
		)
	}
}