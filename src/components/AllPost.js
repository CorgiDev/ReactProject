//Imports the needed React elements
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import extra components
import Post from './Post';

//Imports the needed css files
import '../components/AllPost.css';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h3 className='subHeader'>All Posts</h3>
                {console.log(this.props)}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        <Post key={post.id} post={post} deletePost = {()=>this.props.deletePost(post.id)} />
                    </div>
                ))}
            </div>
        );
    }
}

export default AllPost;