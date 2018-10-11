import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{this.props.post.title}</span>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button className="btn grey" onClick={this.handleClick}>
              Delete post
            </button>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch({ type: 'DELETE_POST', id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
