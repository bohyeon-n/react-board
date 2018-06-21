import React from "react";
import PostListItem from '../components/PostListItem'
import { PostListConsumer } from "../contexts/PostListContext";
export default class PostListContainer extends React.Component {
  render() {
    return (
      <PostListConsumer>
        {({ posts }) => 
        posts.map(post => <PostListItem title={post.title} username={post.user.username} />
        )}
      </PostListConsumer>
    );
  }
}

