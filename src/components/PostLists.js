import React from 'react'
import PostListItem from './PostListItem'
export default class PostLists extends React.Component {
  render() {
    return (
      posts.map(post => (
        <PostListItem/>
      ))
    )
  }
}