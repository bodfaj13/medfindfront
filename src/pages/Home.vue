<template>
  <div class="content">
    <Header :mobileMenu="mobileMenu"></Header>
    <HomeBody></HomeBody>
    <Footer></Footer>
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
  props: {
    mobileMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showLoader (landingLoader) {
      setTimeout((landingLoader) => {
        this.landingLoader = false
      }, 3000)
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
