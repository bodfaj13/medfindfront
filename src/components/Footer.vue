<template>
  <div class="content">
    <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col l6 m6 s12">
            <h5 class="white-text">App Bio</h5>
            <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


          </div>
          <div class="col l3 m3 s12">
            <h5 class="white-text">Site Maps</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l3 m3 s12">
            <h5 class="white-text">Others</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Project by <a class="brown-text text-lighten-4" href="#">{{ projectBy| toLowercase}}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    msg: 'Welcome to Footer Component!',
    projectBy: 'Bello Ajibola'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
