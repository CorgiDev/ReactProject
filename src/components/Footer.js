import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <footer>
                <a href="http://twitter.com/egraytech"><img src="img/twitter-square.png" alt="Twitter logo" className="social-icon" /></a>
                <a href="http://facebook.com/egraytech"><img src="img/fb-square.png" alt="Facebook logo" className="social-icon" /></a>
                <p>&copy; 2017 Elizabeth Gray.</p>
                <p className="attribution">All social media icons on this page were found on <a href="https://www.iconfinder.com/" className="attribution-link">Icon Finder</a>.</p> 
                <p className="attribution">Octocat is a GitHub logo, and is the property of <a href="https://github.com/logos" className="attribution-link">GitHub</a>.</p>
        </footer>
      )
   }
}