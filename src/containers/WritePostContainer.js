import React from 'react';
import WritePostForm from '../components/WritePostForm';
import { WritePostConsumer } from '../contexts/WritePostContext';
import { Redirect } from 'react-router-dom';
export default class WritePostContainer extends React.Component {
  state = {
    redirect: false,
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <WritePostConsumer>
          {({ writePost }) => (
            <WritePostForm
              writePost={async (title, body) => {
                await writePost(title, body);
                this.setState({
                  redirect: true,
                });
              }}
            />
          )}
        </WritePostConsumer>
      );
    }
  }
}
