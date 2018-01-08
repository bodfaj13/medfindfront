<template>
  <div id="app">
    <router-view></router-view>
    <div class="fixed-action-btn" v-if="floatBtn">
      <router-link to="/medfind" class="btn-floating btn-large waves-effect waves-light red animated infinite pulse"><i class="material-icons">my_location</i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: 'Welcome to App',
    floatBtn: true
  }),
  methods: {
    hideFloatBtn () {
      this.floatBtn = false
    },
    checkRoute () {
      let route = this.$route.name
      if (route === 'Admin Dashboard') {
        this.floatBtn = false
      } else {
        this.floatBtn = true
      }
    }
  },
  mounted: function () {
    this.checkRoute()
  }
}
</script>

<style lang="scss">

</style>
