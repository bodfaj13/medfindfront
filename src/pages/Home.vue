<template>
  <div class="content">
    <div v-if="spinner">
      <center>
        <md-progress-spinner class="md-primary centerSpinner" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      </center>
    </div>
    <div v-else class="animated fadeInUp">
      <div class="jumbo">
        <img src="../assets/img/zhen-hu-340739.jpg" alt="" class="jumboImg">
        <div class="welcomeNote">
          <div class="welcomeTitle">
            <span class="md-display-1">Locate the nearest Health Care Center</span>
          </div>
          <div class="welcomeSub">
            <span class="md-subheading">Eaisest way to locate a Health Care Center in less than a minute! </span>
          </div>
          <md-card class="jumboCard">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Lets Get</div>
                <div class="md-title">Started</div>
              </md-card-header-text>

            <md-card-media md-medium>
              <md-icon class="md-size-5x animated infinite pulse">my_location</md-icon>
              </md-card-media>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-raised md-primary">User Guide</md-button>
              <md-button class="md-raised md-accent">Ambluance</md-button>
              <md-button class="md-raised md-primary">Emergency?</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    msg: 'Welcome to MedFind Home Page!',
    spinner: true
  }),
  methods: {
    spinnerShow (spinner) {
      setTimeout((spinner) => {
        this.spinner = false
      }, 3000)
    }
  },
  mounted: function () {
    this.spinnerShow()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .centerSpinner{
    margin: 250px 0 250px 0;
  }
  .jumbo{
    position: relative;
    height: 633px;
  }
  .jumboImg{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50;
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -1;
    -webkit-filter: brightness(0.7);
    filter: brightness(0.7);
    object-position: 0 0;

    // &:before {
    // content: '';
	  // position: absolute;
	  // top: 0;
	  // right: 0;
	  // bottom: 0;
	  // left: 0;
	  // background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
	  // opacity: .6; 
    // }
  }

  .welcomeNote{
    padding: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
  .jumboCard{
    padding-top: 20px;
    width: 40%;
    margin: 0px auto;
    background-image: linear-gradient(to bottom right,#ffffff,#0d9bee);
  }

  @media only screen and (max-width: 600px) {
  .jumboCard{
    width: 100%;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 992px) {
  .jumboCard{
    width: 50%;
    }
  }
</style>
