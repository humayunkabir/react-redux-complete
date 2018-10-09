import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data.slice(0, 10) }))
      .catch(error => console.log(error));
  }
  render() {
    const { posts } = this.state;
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

export default Home;
