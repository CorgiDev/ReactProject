import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Main CSS file for page
import './Accessibility.css';

//Imports needed components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Accessibility extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id='container'>
          <Helmet>
				  	<title>CorgiDev: Accessibility Page</title>
				  </Helmet>
			    <Header />
			    <div id='wrapper'>
				    <p>Future home of the Accessibility page.</p>
				    <Footer />
			    </div>
		    </div>
      )
   }
}