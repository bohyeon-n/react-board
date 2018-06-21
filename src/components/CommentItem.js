import React from 'react'

export default class CommentItem extends React.Component {
  render() {
    const {body, username} = this.props
    return (
      
      <React.Fragment>
        <div>{body}</div>
        <div>{username}</div>

      </React.Fragment>

    )
  }
}