<template>
  <div class="content animated fadeInUp">
    <div class="col l6 offset-l3 m6 offset-m3 s12">
      <form class="login-form">
        <div class="row card">
          <div class="card-content">
            <span class="card-title">Admin Login</span>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">account_box</i>
              <input id="email" type="text" v-model="Email">
              <label for="email">Email</label>
              <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Email">{{error_Email}}</span>
            </div>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">lock</i>
              <input id="password" type="password" v-model="Password">
              <label for="password">Password</label>
              <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Password">{{error_Password}}</span>
            </div>
            <div class="col s12 m12 l12 card-action">
              <button class="waves-effect waves-light btn-large col s12 m12 l12" @click="sendLogin" :class="{disabled: btnDisabled}">
                <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4" v-if="preloaderSwitch">
                  <Preloader class="preloader"></Preloader>
                </div>
                <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4">
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
import AuthService from '../services/AuthService'

export default {
  name: 'AdminBody',
  data: () => ({
    msg: 'Welcome to AdminBody Component!',
    preloaderSwitch: false,
    btnDisabled: false,
    Email: '',
    Password: '',
    error_Email: '',
    error_Password: '',
    error: '',
    loginSuccess: ''
  }),
  methods: {
    async sendLogin (e) {
      e.preventDefault()
      this.error_Password = ''
      this.error_Email = ''
      this.btnDisabled = true
      this.preloaderSwitch = true
      var go = true
      if (this.Email.length === 0) {
        this.error_Email = 'Email field is required'
        go = false
      }
      if (this.Password.length === 0) {
        this.error_Password = 'Password field is required'
        go = false
      }
      if (go === true) {
        try {
          const response = await AuthService.loginAdmin({
            email: this.Email,
            password: this.Password
          })
          console.log(response)
          this.loginSuccess = response.data.success
          this.$store.dispatch('setToken', response.data.token)
          this.timeOut()
          this.alert()
          setTimeout(() => {
            this.$router.push('/dashboard')
          }, 2000)
        } catch (error) {
          this.error = error.response.data.error
          this.error_Email = error.response.data.error_Email
          this.error_Password = error.response.data.error_Password
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    timeOut () {
      setTimeout(() => {
        this.btnDisabled = false
        this.preloaderSwitch = false
      }, 2300)
    },
    alert () {
      this.$swal(this.loginSuccess, '', 'success')
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
