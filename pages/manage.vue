<template>
  <div>
    <navbar />
    <div class="manage-page">
      <div class="columns mail-app">
        <aside class="column is-2 aside hero">
          <div>
            <div class="compose has-text-centered">
              <a class="button is-danger is-block is-bold">
              <span class="compose">Create</span>
              </a>
            </div>
            <div class="main">
            </div>
          </div>
        </aside>
        <div class="column is-4 messages hero is-fullheight" id="message-feed">
          <div class="inbox-messages" id="inbox-messages">
            <!-- card Starts -->
            <div
              v-for="post in posts"
              :key="post._id"
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
        <div class="column is-6 message hero is-fullheight is-hidden" id="message-pane">
          <div class="box message-preview">
            <div class="top">
              <div class="avatar">
                <img src="https://placehold.it/128x128">
              </div>
              <div class="address">
                <div class="name">John Smith</div>
                <div class="email">someone@gmail.com</div>
              </div>
              <hr>
              <div class="content">
              </div>
            </div>
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
import { mapState } from 'vuex'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts
    })
  }
}
</script>
<style scoped>
  .manage-page {
    padding: 30px;
  }

  .card {
    margin-bottom: 10px;
  }

  .card:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }


</style>







