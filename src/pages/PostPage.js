import React from 'react'
import { PostProvider } from '../contexts/PostContext';
import PostListContainer from '../containers/PostListContainer'
export default class PostPage extends React.Component {
  render() {
    return (
      <PostProvider>
        <PostListContainer/>

      </PostProvider>
    )
  }
}