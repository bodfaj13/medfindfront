<template>
  <div class="content">
    <div class="navbar-fixed">
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <router-link to="/" id="logo-container" class="brand-logo">MedFind</router-link>
          <!-- <a id="logo-container" href="#" class="brand-logo">MedFind</a> -->
          <router-link to="/admin">Admin</router-link>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/userguide">User Guide</router-link></li>
            <li><router-link to="/users">Users</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
          </ul>
        </div>
        <div class="nav-content container animated bounceIn" v-if="mobileMenu">
          <ul class="tabs card white">
            <li class="tab"><router-link to="/" class="black-text">Home</router-link></li>
            <li class="tab"><router-link to="/userguide" class="black-text">User Guide</router-link></li>
            <li class="tab"><router-link to="/users" class="black-text">Users</router-link></li>
            <li class="tab"><router-link to="/admin" class="black-text">Admin</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    msg: 'Welcome to Header Component!'
  }),
  props: {
    mobileMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"scoped>

</style>
