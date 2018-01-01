<template>
  <div id="app">
    <router-view></router-view>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">my_location</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: 'Welcome to App'
  })
}
</script>

<style lang="scss">

</style>
