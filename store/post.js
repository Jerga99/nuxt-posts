
import { INITIAL_DATA } from './index'
import Vue from 'vue'


export function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 200)
  })
}


export const state = () => {
  return {
    items: []
  }
}

// Getters are like computed properties but for Vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0
  }
}

// Very good spot to send a request to a server. Usualy Actions resolve into some data
export const actions = {
  fetchPosts({commit}) {
    return fetchPostsAPI()
      .then((posts) => {
        commit('setPosts', posts)
      })
  },
  createPost({commit}, postData) {
    // create post on server, or perssist data in some way
    postData._id = Math.random().toString(36).substr(2, 7)
    postData.createdAt = new Date()
    commit('addPost', postData)
  },
  updatePost({commit, state}, postData) {

    const index = state.items.findIndex((post) => {
      return post._id === postData._id
    })

    commit('replacePost', {post: postData, index})
  }
}

// Mutations are simple functions that have access to a state.
// Mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts
  },
  addPost(state, post) {
    state.items.push(post)
  },
  replacePost(state, {post, index}) {
    Vue.set(state.items, index, post)
  }
}










