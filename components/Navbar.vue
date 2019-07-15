
<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
        </a>
        <div @click="isActive = !isActive"
             class="navbar-burger burger"
             aria-label="menu"
             aria-expanded="false"
             data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div @click="isActive = !isActive"
           id="navMenu"
           :class="{'is-active': isActive}"
           class="navbar-menu">
        <div class="navbar-end">
          <div
            :class="{'is-active': isActive}"
            class="navbar-item has-dropdown">
            <a class="navbar-link">
            Menu
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
              Dashboard
              </a>
              <a class="navbar-item">
              Profile
              </a>
              <a class="navbar-item">
              Settings
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
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











