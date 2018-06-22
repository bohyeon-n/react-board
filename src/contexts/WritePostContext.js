import React from 'react';
import boardAPI from '../boardAPI';
import Redirect from 'react-router-dom/Redirect';

const { Provider, Consumer } = React.createContext();

class WritePostProvider extends React.Component {
  writePost = async (title, body) => {
    try {
      const userRes = await boardAPI.get('/me');
      const res = await boardAPI.post('/posts', {
        title: title,
        body: body,
        userId: userRes.data.id,
      });
    } catch (e) {
      alert(e.message);
    } finally {
      <Redirect to="/" />;
    }
  };

  render() {
    const value = {
      writePost: this.writePost,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { WritePostProvider, Consumer as WritePostConsumer };
