<template>
  <div class="content animated fadeInUp">
    <div class="col l6 offset-l3 m6 offset-m3 s12">
      <form class="login-form">
        <div class="row card">
          <div class="card-content">
            <span class="card-title">Admin Login</span>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">account_box</i>
              <input id="username" type="text" class="validate">
              <label for="username">Username</label>
            </div>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">lock</i>
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
              <!-- <span class="helper-text" data-error="wrong" data-success="right"></span> -->
            </div>
            <div class="col s12 m12 l12 card-action" @click="sendLogin">
              <button class="waves-effect waves-light btn-large col s12 m12 l12">
                <div class="col l2 s2 m2" v-if="preloaderSwitch">
                  <Preloader class="preloader"></Preloader>
                </div>
                <div class="col l8 s8 m8">
                  login
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Preloader from './Preloader'
export default {
  name: 'AdminBody',
  data: () => ({
    msg: 'Welcome to AdminBody Component!',
    preloaderSwitch: true
  }),
  methods: {
    sendLogin (e) {
      e.preventDefault()
      console.log(`true from sendLogin`)
    }
  },
  components: {
    Preloader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .adminBody-send{
    padding-left: 10px;
  }
  .login-form{
    margin: 35px 0 35px 0;
  }
  .preloader{
    margin-top: 8px;
  }
</style>
