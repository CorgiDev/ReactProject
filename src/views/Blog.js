import React, { Component } from 'react';

//Main CSS file for page
import './Blog.css';

//Imports needed components
import Header from '../components/Header';
import AllPost from '../components/PostForm';
import PostForm from '../components/AllPost';
import Footer from '../components/Footer';

var blogTitleStyle ={
    color: "#714f02",
    textAlign: "center",
    margin: "0 0 20px 0",
    padding: "0 0 40px 0",
    maxHeight: "20px",
    clear: "both",
    fontSize: "2.5em",
};

export default class Blog extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id='container'>
			    <Header />
			    <div id='wrapper'>
              <h2 style={blogTitleStyle}>
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