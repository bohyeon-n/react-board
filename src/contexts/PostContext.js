import React from 'react'
import boardAPI from '../boardAPI'

const {Provider, Consumer} = React.createContext()
class PostProvider extends React.Component {
  state = {
    posts: [

    ]
  }
  componentDidMount () {
    this.fetchTodos()
  }
  fetchTodos = async () => {
    const res = await boardAPI.get('/posts?_expand=user')
    console.log(res.data)
    this.setState({
      posts: res.data
    })
  }
  render() {
    const value = {
      posts: this.state.posts
    }
    return <Provider value={value}>{this.props.children}</Provider>
    
  }
}

export {PostProvider, Consumer as PostConsumer} 

