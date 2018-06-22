import React from 'react';

export default class Post extends React.Component {
  render() {
    const { title, body, author } = this.props;
    return (
      <React.Fragment>
        <div>{`작성자: ${author}`}</div>
        <div>{`제목:${title}`}</div>
        <div>{`내용: ${body}`}</div>
      </React.Fragment>
    );
  }
}
