import React from "react";
import { PostConsumer } from "../contexts/PostContext";
import Post from "../components/Post";
export default class PostContainer extends React.Component {
  render() {
    return (
      <PostConsumer>
        {({ title, body, author, loading }) => (
          <Post title={title} body={body} author={author} />
        )}
      </PostConsumer>
    );
  }
}
