import React from 'react'
import PostContainer from '../containers/PostContainer'
import { PostProvider } from '../contexts/PostContext';
import {match} from 'react-router-dom'
export default class PostPage extends React.Component {
  render() {
    return (
      <PostProvider id={this.props.match.params.id}>
        <PostContainer/>

      </PostProvider>
    )
  }
}