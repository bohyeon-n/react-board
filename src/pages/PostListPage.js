import React from 'react'
import { PostListProvider } from '../contexts/PostListContext';
import PostListContainer from '../containers/PostListContainer'
export default class PostListPage extends React.Component {
  render() {
    return (
      <PostListProvider>
        <PostListContainer/>

      </PostListProvider>
    )
  }
}