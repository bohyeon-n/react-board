import React from 'react';
import { PostConsumer } from '../contexts/PostContext';
import Post from '../components/Post';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
import Title from '../components/Title';
import CommentListContainer from '../containers/CommentListContainer';
export default class PostContainer extends React.Component {
  render() {
    return (
      <PostConsumer>
        {({ title, body, author, loading, me, userId }) =>
          loading ? (
            <div>loading...</div>
          ) : (
            <div>
              <Title title="post" />
              <Post title={title} body={body} author={author} />
              {localStorage.getItem('token') && me === userId ? (
                <DeleteButtonContainer />
              ) : null}
            </div>
          )
        }
      </PostConsumer>
    );
  }
}
