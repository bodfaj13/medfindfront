<template>
  <div class="content">
    <div v-if="spinner">
      <center>
        <md-progress-spinner class="md-primary centerSpinner" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      </center>
    </div>
    <div v-else class="animated fadeInUp">
        {{msg}}
    </div>   
  </div>
</template>

<script>
export default {
  name: 'WhyUs',
  data: () => ({
    msg: 'Welcome to WhyUs Page!',
    spinner: true
  }),
  methods: {
    spinnerShow (spinner) {
      setTimeout((spinner) => {
        this.spinner = false
      }, 2000)
    }
  },
  mounted: function () {
    this.spinnerShow()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .centerSpinner{
    margin: 250px 0 250px 0;
  }
</style>
