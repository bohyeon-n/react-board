import React from 'react'

export default class PostListItem extends React.Component {
  render() {
    const {title, username} = this.props
    return (
      <div>
        <div>{title}</div>
        <div>{username}</div>
      </div>
    )
  }
}