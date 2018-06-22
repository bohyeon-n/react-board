import React from 'react';
import boardAPI from '../boardAPI';
const { Provider, Consumer } = React.createContext();

class CommentProvider extends React.Component {
  state = {
    comments: [],
    loading: false,
  };
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = async () => {
    const { id } = this.props;
    const res = await boardAPI.get(`/comments?postId=${id}&&_expand=user`);
    this.setState({
      comments: res.data,
    });

    console.log(res.data);
    console.log(this.state.comments);
  };
  render() {
    const value = {
      comments: this.state.comments,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CommentProvider, Consumer as CommentConsumer };
