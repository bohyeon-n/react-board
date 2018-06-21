import React from "react";
import WritePostContainer from "../containers/WritePostContainer";
import { WritePostProvider } from "../contexts/WritePostContext";
import withAuth from "../hocs/withAuth";
class WritePostPage extends React.Component {
  render() {
    return (
      <WritePostProvider>
        <WritePostContainer />
      </WritePostProvider>
    );
  }
}

export default withAuth("/login")(WritePostPage);
