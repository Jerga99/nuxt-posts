<template>
  <div>
    <navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <div class="post">
                  <a class="post-header post-header-link clickable">
                    <h4 class="title is-4">Some Title</h4>
                    <h5 class="subtitle is-5">Some Subtitle</h5>
                  </a>
                  <div class="post-content">
                    by Filip Jerga, 27th Jan, 2019
                  </div>
                </div>
                <div class="post">
                  <a class="post-header post-header-link clickable">
                    <h4 class="title is-4">Some Title</h4>
                    <h5 class="subtitle is-5">Some Subtitle</h5>
                  </a>
                  <div class="post-content">
                    by Filip Jerga, 27th Jan, 2019
                  </div>
                </div>
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
  .post-content {
    font-style: italic;
  }

  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }

  .post:hover {
    border-bottom: 2px solid #e8e8e8;
  }
</style>
