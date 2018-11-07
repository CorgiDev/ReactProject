import React, { Component } from 'react';
import './Header.css';
// import logo from './logo.svg';

export default class Header extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <header>
          <a href="index.html" id="logo">
                <h1>Elizabeth Gray</h1>
                <h2>Developer in Training</h2>
            </a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Blog">Blog</a></li>
                    <li><a href="/AboutMe">About Me</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
      )
   }
}