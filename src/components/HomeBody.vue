<template>
  <div class="content animated fadeInUp">
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <h3 class="header center black-text text-lighten-2">Locate The Nearest Health Center. </h3>
          <div class="row center container">
            <img src="../assets/img/devices.png" class="jumboImg" alt="Unsplashed background img 1">
            <br>
            <router-link to="/medfind" class="waves-effect waves-light btn-large red"><i class="material-icons left">my_location</i>Emergency</router-link>
          </div>
          <br><br>
        </div>
      </div>
      <div class="parallax"><img src="../assets/img/jamie-dench-254774.jpg" alt="Unsplashed background img 1"></div>
    </div>

    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">location_searching</i></h2>
              <h5 class="center">Accurate Locations</h5>

              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">group</i></h2>
              <h5 class="center">User Focused</h5>

              <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">Easy to work with</h5>

              <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBody',
  data: () => ({
    msg: 'Welcome to HomeBody Component!'
  })
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
