import React from 'react'
import PostContainer from '../containers/PostContainer'
import { PostProvider } from '../contexts/PostContext';
export default class PostPage extends React.Component {
  render() {
    return (
      <PostProvider id={match.params.id}>
        <PostContainer/>

      </PostProvider>
    )
  }
}