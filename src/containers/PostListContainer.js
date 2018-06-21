import React from "react";
import PostListItem from '../components/PostListItem'
import { PostListConsumer } from "../contexts/PostListContext";
export default class PostListContainer extends React.Component {
  render() {
    return (
      <PostListConsumer>
          
        {({ posts, loading }) => (
          loading ? (
            <div>loading...</div>
          ) : (
            posts.map(post => <PostListItem key={post.id} title={post.title} username={post.user.username} id={post.id}/>)

          )

      )}
 
      </PostListConsumer>
    );
  }
}

