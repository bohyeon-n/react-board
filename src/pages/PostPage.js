import React from 'react'
import PostContainer from '../containers/PostContainer'
import { PostProvider } from '../contexts/PostContext';
import {match} from 'react-router-dom'
import {CommentProvider} from '../contexts/CommnetContext'
import CommentListContainer from '../containers/CommentListContainer'
export default class PostPage extends React.Component {
  render() {
    return (
      <PostProvider id={this.props.match.params.id}>
        <CommentProvider id={this.props.match.params.id}>
        <PostContainer/>
        <CommentListContainer />

        </CommentProvider>
      </PostProvider>
    )
  }
}
