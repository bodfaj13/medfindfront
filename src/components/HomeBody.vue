<template>
  <div class="content">
    <div id="index-banner" class="parallax-container animated fadeIn">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <h3 class="header center teal-text text-lighten-2">Locate The Nearest Health Center. </h3>
          <div class="row center container">
            <img src="../assets/img/devices.png" class="jumboImg" alt="Unsplashed background img 1">
            <br>
            <a class="waves-effect waves-light btn-large"><i class="material-icons left">help_outline</i>User Guide</a>
            <a class="waves-effect waves-light btn-large"><i class="material-icons right">local_hospital</i>Emergency</a>
          </div>
          <br><br>
        </div>
      </div>
      <div class="parallax"><img src="https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=1049&q=80" alt="Unsplashed background img 1"></div>
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
