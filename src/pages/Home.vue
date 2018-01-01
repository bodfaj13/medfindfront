<template>
  <div class="content">
    <div v-show="landingLoader">
      <RotateSquare2 class="landing-loader"></RotateSquare2>
    </div>
    <div v-show="!landingLoader">
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  data: () => ({
    msg: 'Welcome to Home Page!',
    landingLoader: true
  }),
  methods: {
    showLoader (landingLoader) {
      setTimeout((landingLoader) => {
        this.landingLoader = false
      }, 2000)
    }
  },
  components: {
    Header,
    HomeBody,
    Footer,
    RotateSquare2
  },
  created: function () {
    this.showLoader()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .landing-loader{
    margin: 0 auto;
    top: 300px;
  }
</style>
