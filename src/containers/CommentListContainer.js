import React from 'react';
import { CommentConsumer } from '../contexts/CommnetContext';
import CommentItem from '../components/CommentItem';

export default class CommentListContainer extends React.Component {
  render() {
    return (
      <CommentConsumer>
        {({ comments }) =>
          comments.map(comment => (
            <CommentItem
              key={comment.id}
              body={comment.body}
              username={comment.user.username}
            />
          ))
        }
      </CommentConsumer>
    );
  }
}
