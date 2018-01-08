<template>
  <div class="content">
    <div v-show="landingLoader">
      <RotateSquare2 class="landing-loader"></RotateSquare2>
    </div>
    <div v-show="!landingLoader">
      <Header></Header>
      <BreadCrumb></BreadCrumb>
      <div class="row container">
         <AdminBody></AdminBody>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'
import AdminBody from '../components/AdminBody'
import {pageLoaderMixin} from '../mixins/pageLoaderMixin'

export default {
  name: 'Admin',
  mixins: [pageLoaderMixin],
  data: () => ({
    msg: 'Welcome to Admin Page!'
  }),
  components: {
    Header,
    Footer,
    RotateSquare2,
    AdminBody,
    BreadCrumb
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
