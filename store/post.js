
import { INITIAL_DATA } from './index'


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
  }
}

// Mutations are simple functions that have access to a state.
// Mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts
  }
}










