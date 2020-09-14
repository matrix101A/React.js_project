import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import postsReducer from "../reducers/postsReducer";
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle align icon user" />
          <div className="content">
            <div className="deescription">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <div>{post.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
