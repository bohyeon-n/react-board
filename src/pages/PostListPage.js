import React from 'react'
import { PostListProvider } from '../contexts/PostListContext';
import PostListContainer from '../containers/PostListContainer'
import Title from '../components/Title'
export default class PostListPage extends React.Component {
  render() {
    return (
      <PostListProvider>
        <Title title='글 목록'/>
        <PostListContainer/>

      </PostListProvider>
    )
  }
}