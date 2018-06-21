import React from 'react'

export default class WritePostForm extends React.Component {
  state = {
    title: '',
    body: ''
  }
  handleInputTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleInputBody = e => {
    this.setState({
      body: e.target.value
    })
  }
  render() {
    const {writePost} = this.props
    const{title, body} = this.state
    return (
      <React.Fragment>
        <label for="title">title
        <input type="text" value={title} onChange={this.handleInputTitle} />
        </label>
        <label for="body">내용
        <textarea value={body} onChange={this.handleInputBody}></textarea>
        </label>
        <button onClick={e => writePost(title, body)}>글 작성하기</button>
      </React.Fragment>
    )
  }
} 