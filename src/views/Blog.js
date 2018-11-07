import React, { Component } from 'react';

//Main CSS file for page
import './Blog.css';

//Imports needed components
import Header from '../components/Header';
import AllPost from '../components/PostForm';
import PostForm from '../components/AllPost';
import Footer from '../components/Footer';

export default class Accessibility extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id='container'>
			    <Header />
			    <div id='wrapper'>
				    <h2 id='headline'>
              CorgiDev Blog!
            </h2>
            <div id='primary'>
              <PostForm />
            </div>
            <div id='secondary'>
              <AllPost />
            </div>
				    <Footer />
			    </div>
		    </div>
      )
   }
}