import React, { Component } from "react";
import axios from "axios";

class Cards extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    console.log("hello");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        post: res.data,
      });
      console.log(this.state.post);
    });
  }

  render() {
    const posts = this.state.post;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card">
            <div className="card-header">{post.title}</div>
            <div className="card-content">{post.body}</div>
          </div>
        );
      })
    ) : (
      <div> No posts</div>
    );
    return (
      <div className="Content container">
        <h4>Get Request Response</h4>
        {postList}
      </div>
    );
  }
}
export default Cards;
