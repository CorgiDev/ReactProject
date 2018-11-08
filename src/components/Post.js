//Imports the needed React elements
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Imports the needed css files
import '../components/Post.css';
import './styles/responsive.css';

class Post extends Component {
    render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button
         onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
         Edit</button>
        <button 
        onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
        Delete</button>
      </div>
    );
   }
  }
  export default connect()(Post);