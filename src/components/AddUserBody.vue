<template>
  <div class="content animated fadeInUp">
    <div class="col l6 offset-l3 m6 offset-m3 s12">
      <form class="adduser-form">
        <div class="row card">
          <div class="card-content">
            <span class="card-title">Register With Us</span>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">account_circle</i>
              <input id="username" type="text" class="validate">
              <label for="username">Fullname</label>
            </div>
            <div class="input-field col s12 m6 l12">
              <i class="material-icons prefix">email</i>
              <input id="user_email" type="email" class="validate">
              <label for="user_email">Email</label>
              <!-- <span class="helper-text" data-error="wrong" data-success="right"></span> -->
            </div>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">call</i>
              <input id="contact" type="text" class="validate">
              <label for="contact">Contact</label>
            </div>
            <div class="col s12 m12 l12 card-action">
              <button class="waves-effect waves-light btn-large col s12 m12 l12" @click="sendAddUser" :class="{disabled: btnDisabled}">
                <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4" v-if="preloaderSwitch">
                  <Preloader class="preloader"></Preloader>
                </div>
                <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4" v-else>
                  Send
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
  name: 'AddUserBody',
  data: () => ({
    msg: 'Welcome to AddUserBody Component!',
    preloaderSwitch: false,
    btnDisabled: false
  }),
  methods: {
    sendAddUser (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.preloaderSwitch = !this.preloaderSwitch
      console.log(`true from sendAddUser`)
    }
  },
  components: {
    Preloader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .adduser-form{
    margin: 35px 0 35px 0;
  }
  .preloader{
    margin-top: 8px;
  }
</style>
