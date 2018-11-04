import React, { Component } from 'react';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Contact extends Component { 
state = { 
}

    render () {                                   
        return (
            <div id='container'>
                <Header />
                <NavBar />
                <h1 className='title'>APP TITLE</h1>
                <Footer />
            </div>
        )
    }
}