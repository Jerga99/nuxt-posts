<template>
  <modal>
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">Create</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Awesome Title">
        </div>
      </div>

      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Awesome subtitle">
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Awesome Content">
          </textarea>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
import Modal from '~/components/shared/Modal'
export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: '',
        subtitle: '',
        content: ''
      }
    }
  }
}
</script>










