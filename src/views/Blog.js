import React, { Component } from 'react';

//Main CSS file for page
import './Blog.css';

//Imports needed components
import Header from '../components/Header';
import AllPost from '../components/PostForm';
import PostForm from '../components/AllPost';
import Footer from '../components/Footer';
import Post from '../components/Post';

export default class Blog extends Component { 
  state={posts:[]}
  createPost = async (attrs) => {
    await fetch("https://reactproject-91bbb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(attrs)
    }).then((r)=>r.json())
    await this.getAllPosts();
  }
  deletePost = async (id) => {
    const res = await fetch(`https://reactproject-91bbb.firebaseio.com/posts/${id}.json`, {
      method: "DELETE"
    }).then((r)=>r.json())
    await this.getAllPosts();
  }
  getAllPosts = async () => {
    const res = await fetch("https://reactproject-91bbb.firebaseio.com/posts.json").then((r)=>r.json())
    const posts = !res ? [] : Object.entries(res).map(([id, attrs])=>({...attrs, id}));
    this.setState({posts})
  }
  async componentDidMount(){
    await this.getAllPosts();
  }

  render () {                                   
      return (
        <div id='container'>
			    <Header />
			    <div id='wrapper'>
            <div id='primary blogList'>
              <AllPost createPost={this.createPost}/>
            </div>
            <div id='secondary blogForm'>
              <PostForm posts={this.state.posts} deletePost={this.deletePost}/>
            </div>
				    <Footer />
			    </div>
		    </div>
      )
   }
}