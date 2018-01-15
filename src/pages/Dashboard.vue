<template>
  <div class="content">
    <BreadCrumbV2>
      <a @click="logOut" class="waves-effect waves-light btn"><i class="material-icons icon-sumfin">settings_power</i></a>
    </BreadCrumbV2>

  </div>
</template>

<script>
import BreadCrumbV2 from '../components/BreadCrumbV2'

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
    BreadCrumbV2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-sumfin{
    margin-top: -13px;
  }
</style>
