import React from 'react'
import boardAPI from '../boardAPI'

const {Provider, Consumer} = React.createContext()
class PostListProvider extends React.Component {
  state = {
    posts: [

    ],
    loading: true
  }
  componentDidMount () {
    this.fetchTodos()
  }
  fetchTodos = async () => {
    const res = await boardAPI.get('/posts?_expand=user')
    console.log(res.data)
    this.setState({
      posts: res.data,
      loading: false
    })
  }
  render() {
    const value = {
      posts: this.state.posts,
      loading: this.state.loading
    }
    return <Provider value={value}>{this.props.children}</Provider>
    
  }
}

export {PostListProvider, Consumer as PostListConsumer} 

