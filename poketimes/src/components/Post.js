import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    const post = this.props.post ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{this.props.post.title}</span>
          <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return { post: state.posts.find(post => post.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Post);
