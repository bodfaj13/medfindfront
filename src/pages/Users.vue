<template>
  <div class="content">
    <div v-show="landingLoader">
      <RotateSquare2 class="landing-loader"></RotateSquare2>
    </div>
    <div v-show="!landingLoader">
      <Header :mobileMenu="mobileMenu"></Header>
      <div class="row container">
        {{msg}}
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {pageLoaderMixin} from '../mixins/pageLoaderMixin'

export default {
  name: 'Users',
  mixins: [pageLoaderMixin],
  data: () => ({
    msg: 'Welcome to Users Page!'
  }),
  props: {
    mobileMenu: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Header,
    Footer,
    RotateSquare2
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
