import React from "react";

export default class Post extends React.Component {
  render() {
    const { title, body, author } = this.props;
    return (
      <React.Fragment>
        <div>{author}</div>
        <div>{title}</div>
        <div>{body}</div>
      </React.Fragment>
    );
  }
}
