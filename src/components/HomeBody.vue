<template>
  <div class="content animated fadeInUp">
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <h3 class="header center teal-text text-lighten-2">Locate The Nearest Health Center. </h3>
          <div class="row center container">
            <img src="../assets/img/devices.png" class="jumboImg" alt="Unsplashed background img 1">
            <br>
            <a class="waves-effect waves-light btn-large red"><i class="material-icons left">local_hospital</i>Emergency</a>
          </div>
          <br><br>
        </div>
      </div>
      <div class="parallax"><img src="../assets/img/zhen-hu-340739.jpg" alt="Unsplashed background img 1"></div>
    </div>

    <HomeBodyInside></HomeBodyInside>
  </div>
</template>

<script>
import HomeBodyInside from './HomeBodyInside'
export default {
  name: 'HomeBody',
  data: () => ({
    msg: 'Welcome to HomeBody Component!'
  }),
  components: {
    HomeBodyInside
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .jumboImg{
    max-width: 200px;
    min-width: 200px;
    max-height: 200px;
    min-height: 200px;
  }
</style>
