import React from 'react'
import boardAPI from '../boardAPI'

const {Provider, Consumer}  = React.createContext()
 class PostProvider extends React.Component {
   state = {
     loading: false,
     title: null,
     body: null,
     author: null
   }
   async componentDidMount () {
     this.setState({
       loading: true
     })
     try {
       const {id} = this.props
       const res = await boardAPI.get(`/posts/${id}?_expand=user`)
       const userRes = await boardAPI.get('/me')
       this.setState({
         title: res.data.title,
         body: res.data.body,
         author: res.data.user.username,
         userId: res.data.userId,
         me: userRes.data.id

       })
     } finally {
       this.setState({
         loading: false
       })
     }
   }
   
   deletePost = async () => {
    
     await boardAPI.delete(`/posts/${this.props.id}`)
   }
  render() {
    const value = {
      loading: this.state.loading,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      userId: this.state.userId,
      me: this.state.me,
      onDelete: this.deletePost
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {PostProvider, Consumer as PostConsumer} 
