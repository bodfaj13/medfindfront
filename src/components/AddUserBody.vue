<template>
  <div class="content animated fadeInUp">
    <div class="col l6 offset-l3 m6 offset-m3 s12">
      <form class="adduser-form">
        <div class="row card">
          <div class="card-content">
            <span class="card-title">Register With Us</span>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">account_circle</i>
              <input id="user_fullname" type="text" v-model="Fullname">
              <label for="user_fullname">Fullname</label>
              <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Fullname">{{error_Fullname}}</span>
            </div>
            <div class="input-field col s12 m6 l12">
              <i class="material-icons prefix">email</i>
              <input id="user_email" type="email"  v-model="Email">
              <label for="user_email">Email</label>
              <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Email">{{error_Email}}</span>
            </div>
            <div class="input-field col s12 m12 l12">
              <i class="material-icons prefix">call</i>
              <input id="user_contact" type="text" v-model="Contact">
              <label for="user_contact">Contact</label>
              <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Contact">{{error_Contact}}</span>
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
import AuthService from '../services/AuthService'

export default {
  name: 'AddUserBody',
  data: () => ({
    msg: 'Welcome to AddUserBody Component!',
    preloaderSwitch: false,
    btnDisabled: false,
    Fullname: '',
    Email: '',
    Contact: '',
    error_Fullname: '',
    error_Email: '',
    error_Contact: '',
    error: '',
    regSuccess: ''
  }),
  methods: {
    async sendAddUser (e) {
      e.preventDefault()
      this.regSuccess = ''
      this.error_Fullname = ''
      this.error_Email = ''
      this.error_Contact = ''
      this.error = ''
      this.btnDisabled = true
      this.preloaderSwitch = true
      var go = true
      if (this.Fullname.length === 0) {
        this.error_Fullname = 'Fullname field is required'
        go = false
      }
      if (this.Email.length === 0) {
        this.error_Email = 'Email field is required'
        go = false
      }
      if (this.Contact.length === 0) {
        this.error_Contact = 'Contact field is required'
        go = false
      } else {
        var phoneNo = /^\d{11}$/
        if (this.Contact.match(phoneNo)) {
          var begin = this.Contact.slice(0, 3)
          if (begin === '080' || begin === '090' || begin === '070' || begin === '081') {
            // go = true
          } else {
            this.error_Contact = 'Invalid contact supplied'
            go = false
          }
        } else {
          this.error_Contact = 'Invalid contact supplied'
          go = false
        }
      }
      if (go === true) {
        try {
          const response = await AuthService.registerUser({
            fullname: this.Fullname,
            email: this.Email,
            contact: this.Contact
          })
          console.log(response.data)
          this.regSuccess = response.data.success
          this.timeOut()
          this.alert()
          this.Fullname = ''
          this.Email = ''
          this.Contact = ''
        } catch (error) {
          this.error = error.response.data.error
          this.error_Email = error.response.data.error_Email
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    alert () {
      this.$swal('Nice!', this.regSuccess, 'success')
    },
    timeOut () {
      setTimeout(() => {
        this.btnDisabled = false
        this.preloaderSwitch = false
      }, 2300)
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
