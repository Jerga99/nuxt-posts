

const INITIAL_DATA = {
  posts: [
    {
      _id: '1',
      title: 'My First Post',
      subtitle: 'My First Subtitle',
      createdAt: new Date(),
      isRead: false
    },
    {
      _id: '2',
      title: 'My Second Post',
      subtitle: 'My Second Subtitle',
      createdAt: new Date(),
      isRead: true
    }
  ]
}


function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.post)
    }, 1000)
  })
}


export const state = () => {
  return {
    posts: []
  }
}

// Very good spot to send a request to a server. Usualy Actions resolve into some data
export const actions = {
  fetchPosts(context) {
    debugger
    console.log('Calling Fetch posts')
    return INITIAL_DATA.posts
  }
}
















