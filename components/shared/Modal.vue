

<template>
  <div>
    <a @click="isActive = true" class="button is-danger is-block is-bold">
      <!-- Open Modal Here -->
      <span class="compose">Create</span>
    </a>
    <!-- Toggle Class Here -->
    <div :class="{'is-active': isActive}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <!-- Close Modal Here -->
          <button @click="isActive = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <h1>Some Testing Data</h1>
          <h2>Just some Text</h2>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <!-- Close Modal -->
          <button @click="isActive = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>










