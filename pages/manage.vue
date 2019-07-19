<template>
  <div>
    <navbar />
    <div class="manage-page">
      <div class="columns mail-app">
        <aside class="column is-2 aside hero">
          <post-create />
        </aside>
        <div class="column is-4 messages hero is-fullheight" id="message-feed">
          <div class="inbox-messages" id="inbox-messages">
            <!-- card Starts -->
            <div
              v-for="post in posts"
              :key="post._id"
              @click="activatePost(post)"
              :class="{'is-active': activePost && post._id === activePost._id}"
              class="card">
              <div class="card-content">
                <div class="msg-header">
                  <span class="msg-from"><small>From Filip Jerga</small></span>
                  <span class="msg-timestamp"></span>
                  <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
                </div>
                <div class="msg-subject">
                  <span class="msg-subject"><strong id="fake-subject-1">{{post.title}}</strong></span>
                </div>
                <div class="msg-snippet">
                  <p id="fake-snippet-1">{{post.subtitle}}</p>
                </div>
              </div>
            </div>
            <!-- card Starts -->
          </div>
        </div>
        <div class="column is-6 message hero is-fullheight" id="message-pane">
          <div class="box message-preview">
            <button @click="deletePost" class="button is-danger delete-button">Delete</button>
            <post-manage :postData="activePost" />
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <p>
              <a class="icon" href="https://github.com/dansup/bulma-templates">
              <i class="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'
import PostCreate from '~/components/PostCreate'
import PostManage from '~/components/PostManage'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar, PostCreate, PostManage
  },
  data() {
    return {
      activePost: {}
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.items
    })
  },
  fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  created() {
    if (this.posts && this.posts.length > 0) {
      this.activePost = this.posts[0]
    }
  },
  methods: {
    activatePost(post) {
      this.activePost = post
    },
    deletePost() {
      if (this.activePost) {
        this.$store.dispatch('post/deletePost', this.activePost._id)
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .manage-page {
    padding: 30px;
  }

  .card {
    margin-bottom: 10px;

    &.is-active {
      background-color: #eeeeee;
    }

    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }
  }

  .delete-button {
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: 0;
  }
</style>







