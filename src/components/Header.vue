<template>
  <div class="content">
    <div class="navbar-fixed">
      <nav class="nav-extended white">
        <div class="nav-wrapper container">
          <router-link to="/" id="logo-container" class="brand-logo left">MedFind</router-link>
          <!-- <a id="logo-container" href="#" class="brand-logo">MedFind</a> -->
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/userguide">User Guide</router-link></li>
            <li><router-link to="/adduser">Users</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
          </ul>
          <ul class="right hide-on-large-only">
            <li><a href="#" @click="menuShowBtn"><i class="material-icons" ref="menuBtn">menu</i></a></li>
          </ul>
        </div>
        <div class="nav-content container animated" v-if="menuShow" :class="{slideInDown: menuShow}">
          <ul class="tabs">
            <li class="tab"><router-link to="/" class="black-text">Home</router-link></li>
            <li class="tab"><router-link to="/userguide" class="black-text">User Guide</router-link></li>
            <li class="tab"><router-link to="/adduser" class="black-text">Users</router-link></li>
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
    msg: 'Welcome to Header Component!',
    menuShow: false
  }),
  methods: {
    menuShowBtn (e) {
      e.preventDefault()
      this.menuShow = !this.menuShow
      if (this.menuShow) {
        this.$refs.menuBtn.innerText = 'close'
      }
      if (!this.menuShow) {
        this.$refs.menuBtn.innerText = 'menu'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"scoped>

</style>
