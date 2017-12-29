<template>
  <div id="app">
    <router-view :mobileMenu="menuShow"></router-view>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">accessibility</i>
      </a>
      <ul>
        <li class="hide-on-large-only"><a class="btn-floating blue animated infinite pulse black-text" @click="menuShowBtn"><i class="material-icons">menu</i></a></li>
        <li><a class="btn-floating red animated infinite pulse black-text"><i class="material-icons">my_location</i></a></li>
        <li><a class="btn-floating yellow animated infinite pulse black-text"><i class="material-icons">perm_identity</i></a></li>
        <li><a class="btn-floating green animated inifnte pulse black-text"><i class="material-icons">near_me</i></a></li>
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
    defaultErase (e) {
      e.preventDefault()
      this.menuShow = false
    }
  },
  mounted: function () {
    console.log(`i was mounted`)
  }
}
</script>

<style lang="scss">

</style>
