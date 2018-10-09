import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = { post: null };
  componentDidMount() {
    const id = this.props.match.params.post_id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => this.setState({ post: res.data }))
      .catch(error => console.log(error));
  }

  render() {
    const post = this.state.post ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{this.state.post.title}</span>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="post card center">
        <div className="card-content">
          <span className="card-title">Loading post...</span>
        </div>
      </div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
