import React from 'react';
import { Link } from 'react-router-dom';
export default class PostListItem extends React.Component {
  render() {
    const { title, username, id } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Link to={`/posts/${id}`}>{title}</Link>
            </td>
            <td>{username}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
