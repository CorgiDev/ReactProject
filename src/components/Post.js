//Imports the needed React elements
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Imports the needed css files
import '../components/Post.css';

class Post extends Component {
    render() {
    return (
      <div className="singlePost">
        <h4 className='postTitle'>{this.props.post.title}</h4>
        <p className="postBody">{this.props.post.message}</p>
        <button className="btn btn-danger"
        onClick={()=>this.props.deletePost(this.props.post.id)}>
        Delete</button>
      </div>
    );
   }
  }
  export default connect()(Post);