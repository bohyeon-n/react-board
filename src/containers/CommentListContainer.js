import React from 'react'

export class CommentListContainer extends React.Component {
  render() {
    return (
      comments.map(comment => {
        <CommentItem />
      })
    )
  }
}