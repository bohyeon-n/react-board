import React from "react";
import PostListItem from '../components/PostListItem'
import { PostConsumer } from "../contexts/PostContext";
export default class PostListContainer extends React.Component {
  render() {
    return (
      <PostConsumer>
        {({ posts }) => 
        posts.map(post => <PostListItem title={post.title} username={post.user.username} />
        )}
      </PostConsumer>
    );
  }
}

