import React from 'react';
import { PostConsumer } from '../contexts/PostContext';
import { Redirect } from 'react-router-dom';
export default class DeleteButtonContainer extends React.Component {
  state = {
    redirect: false,
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <PostConsumer>
          {({ onDelete }) => (
            <button
              onClick={async e => {
                await onDelete();
                this.setState({
                  redirect: true,
                });
              }}
            >
              삭제하기
            </button>
          )}
        </PostConsumer>
      );
    }
  }
}
