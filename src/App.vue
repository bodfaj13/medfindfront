<template>
  <div id="app">
    <router-view :mobileMenu="menuShow"></router-view>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red animated inifnte pulse">
        <i class="large material-icons">accessibility</i>
      </a>
      <ul>
        <li class="hide-on-large-only"><a class="btn-floating blue animated infinite pulse black-text" @click="menuShowBtn"><i class="material-icons">menu</i></a></li>
        <li><a class="btn-floating red black-text animated pulse"><i class="material-icons">my_location</i></a></li>
        <li><router-link to="/adduser" class="btn-floating yellow black-text animated pulse"><i class="material-icons">person_add</i></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: 'Welcome to App',
    menuShow: false
  }),
  methods: {
    menuShowBtn (e) {
      e.preventDefault()
      this.menuShow = !this.menuShow
      console.log(e.target)
    },
    defaultErase () {
      this.menuShow = false
    },
    navigateAddUser (e) {
      e.preventDefault()
      console.log(e.target)
    }
  }
}
</script>

<style lang="scss">

</style>
