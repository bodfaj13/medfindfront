<template>
  <div class="content">
    <div v-show="landingLoader">
      <RotateSquare2 class="landing-loader"></RotateSquare2>
    </div>
    <div v-show="!landingLoader">
      <BreadCrumbV2>
        <a @click="goHome" class="waves-effect waves-light btn"> <i class="material-icons icon-sumfin">home</i></a>
      </BreadCrumbV2>
      <!-- dan-chung-355054.jpg -->
      <div class="row medfind-body">
        <div class="col l3 s12 m4 medfind-left">
          <div class="card">
            <div class="card-image">
              <img src="../assets/img/himesh-kumar-behera-216019.jpg">
              <span class="card-title white-text">Set Search Options</span>
              <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="material-icons">refresh</i></a>
            </div>
            <div class="card-content">
              <form class="col s12">
                <h6>Search Radius</h6>
                <p>
                  <label>
                    <input class="with-gap" name="group1" type="radio" />
                    <span>10km</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input class="with-gap" name="group1" type="radio" />
                    <span>50km</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input class="with-gap" name="group1" type="radio" />
                    <span>100km</span>
                  </label>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div class="col l9 s12 m8">
          <div class="container">
            <h1>THE MAP GOES HERE!</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
import Header from '../components/Header'
import BreadCrumbV2 from '../components/BreadCrumbV2'
import {pageLoaderMixin} from '../mixins/pageLoaderMixin'
import Footer from '../components/Footer'

export default {
  name: 'MedFind',
  mixins: [pageLoaderMixin],
  data: () => ({
    msg: 'Welcome to MedFind Page!'
  }),
  methods: {
    goHome (e) {
      e.preventDefault()
      window.location.assign('/')
    }
  },
  components: {
    Header,
    RotateSquare2,
    BreadCrumbV2,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .landing-loader{
    margin: 0 auto;
    top: 300px;
  }
  .medfind-left .card{
    min-height: 350px;
  }
  .icon-sumfin{
    margin-top: -13px;
  }
</style>
