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
                <post-item
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :isRead="post.isRead"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form>
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.subtitle">
      </form>
      {{isFormValid()}} -->
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'
export default {
  components: {
    Navbar, PostItem
  },
  data() {
    return {
      title: 'My Title From Page',
      form: {
        title: 'some title',
        subtitle: 'some subtitle'
      }
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    // isFormValid() {
    //   console.log('isFormValid has been called')
    //   if (this.form.title) {
    //     return true
    //   }

    //   return false
    // }
  },
  methods: {
    isFormValid() {
      console.log('isFormValid has been called')
      if (this.form.title) {
        return true
      }

      return false
    }
  }
}
</script>
<style scoped>
</style>








