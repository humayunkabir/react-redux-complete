import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        const { id, title, body } = post;
        return (
          <div className="post card" key={id}>
            <img src={Pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={`/${id}`}>
                <span className="card-title red-text">{title}</span>
              </Link>
              <p>{body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="post card center">
        <div className="card-content">
          <span className="card-title">No posts yet!</span>
        </div>
      </div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
