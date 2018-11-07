//Imports the needed React elements
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import extra components
import Post from './Post';
import EditComponent from './EditComponent';

//Imports the needed css files
import '../components/AllPost.css';
import './styles/responsive.css';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h3 className='subHeader'>All Posts</h3>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);