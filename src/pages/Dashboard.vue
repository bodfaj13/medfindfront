<template>
  <div class="content">
    <DashboardBody/>
  </div>
</template>

<script>
import DashboardBody from '../components/DashboardBody'

export default {
  name: 'Dashboard',
  data: () => ({
    msg: 'Welcome to Dashboard Page!'
  }),
  methods: {
    logOut (e) {
      e.preventDefault()
      this.$store.dispatch('setToken', null)
      this.$router.push('/admin')
    }
  },
  components: {
    DashboardBody
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-sumfin{
    margin-top: -13px;
  }
</style>
