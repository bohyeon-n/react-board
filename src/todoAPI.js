import axios from 'axios'
import React from 'react'
 const todoAPI = axios.create({
  baseURL: 'https://hurricane-pansy.glitch.me'
})

todoAPI.interceptors.request.use(config => {
  if(localStorage.getItem('token')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  }
})

export default todoAPI