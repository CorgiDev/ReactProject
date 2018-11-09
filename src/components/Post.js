//Imports the needed React elements
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Imports the needed css files
import '../components/Post.css';

class Post extends Component {
    render() {
    return (
      <div className="singlePost">
        <u><h4 className='postTitle'>{this.props.post.title}</h4></u>
        <p className="postBody">{this.props.post.message}</p>
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