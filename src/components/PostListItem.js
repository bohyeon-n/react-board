import React from 'react'
import {Link} from 'react-router-dom'
export default class PostListItem extends React.Component {
  render() {
    const {title, username,id} = this.props
    return (
      <div>
        <Link to={`/posts/${id}`}>{title}</Link>
        <div>{username}</div>
      </div>
    )
  }
}