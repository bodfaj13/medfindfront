<template>
  <div class="content animated fadeInUp">
    <div class="container">
      <div class="row">
        <div class="col l6 m12">
          <h4>Note:</h4>
          <p>Here is a quick user quide to help you around the application</p>
          <div class="steps">
            <div class="row">
                <div class="stepper">
                  <div class="btnStepper">
                    <a class="waves-effect waves-teal btn-flat col l12 s12 m12" @click.prevent="collapseStepper('stepper1')" id="stepper1">Step 1</a>
                  </div>
                  <div class="stepperContent col l12 s12 m12 animated fadeIn" v-if="stepper1">
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                    <br>
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                  </div>
                </div>
                <div class="stepper">
                  <div class="btnStepper">
                    <a class="waves-effect waves-teal btn-flat col l12 s12 m12" @click.prevent="collapseStepper('stepper2')"id="stepper2">Step 2</a>
                  </div>
                  <div class="stepperContent col l12 s12 m12 animated fadeIn" v-if="stepper2">
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                    <br>
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                  </div>
                </div>
                <div class="stepper">
                  <div class="btnStepper">
                    <a class="waves-effect waves-teal btn-flat col l12 s12 m12" @click.prevent="collapseStepper('stepper3')" id="stepper3">Step 3</a>
                  </div>
                  <div class="stepperContent col l12 s12 m12 animated fadeIn" v-if="stepper3">
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                    <br>
                    We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col l6 m12">
          <div class="getMore">
            <h4>
              Not Satisfied?
            </h4>
            <div class="divider"></div>
            <!-- <br/> -->
            <!-- <div>
              <a class="waves-effect waves-light btn-large"><i class="material-icons left">perm_phone_msg</i>Place A Call</a>
            </div> -->
            <!-- <h4>
              Or
            </h4> -->
            <div class="getMore-form">
                <p>Send Us A Message Directly</p>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12 m6 l12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="user_fullname" type="text" v-model="Fullname">
                        <label for="user_fullname">Full Name</label>
                        <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Fullname">{{error_Fullname}}</span>
                      </div>
                      <div class="input-field col s12 m6 l12">
                        <i class="material-icons prefix">email</i>
                        <input id="user_email" type="email" v-model="Email">
                        <label for="user_email">Email</label>
                        <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Email">{{error_Email}}</span>
                      </div>
                      <div class="input-field col s12 m12 l12">
                        <i class="material-icons prefix">textsms</i>
                        <textarea id="user_msg" class="materialize-textarea" style="white-spacing: pre" v-model="Message"></textarea>
                        <label for="user_msg">Message</label>
                        <span class="helper-text red-text right animated bounceIn" data-error="wrong" data-success="right" v-if="error_Message">{{error_Message}}</span>
                      </div>
                      <div class="col s12 m12 l12">
                        <button class="waves-effect waves-light btn-large col s12 m12 l12" @click="sendMsg" :class="{disabled: btnDisabled}">
                          <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4" v-if="preloaderSwitch">
                            <Preloader class="preloader"></Preloader>
                          </div>
                          <div class="col l4 offset-l4 s4 offset-s4 m4 offset-m4" v-else>
                            Send
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from './Preloader'
import UserSendContact from '../services/UserSendContact'

export default {
  name: 'UserGuideBody',
  data: () => ({
    msg: 'Welcome to UserGuideBody Component!',
    preloaderSwitch: false,
    btnDisabled: false,
    stepper1: true,
    stepper2: false,
    stepper3: false,
    Fullname: '',
    Email: '',
    Message: '',
    error_Fullname: '',
    error_Email: '',
    error_Message: '',
    error: '',
    sendSuccess: ''
  }),
  methods: {
    async sendMsg (e) {
      e.preventDefault()
      this.sendSuccess = ''
      this.error_Fullname = ''
      this.error_Email = ''
      this.error_Message = ''
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
      if (this.Message.length === 0) {
        this.error_Message = 'Message field is required'
        go = false
      }
      if (go === true) {
        try {
          const response = await UserSendContact.sendContact({
            fullname: this.Fullname,
            email: this.Email,
            message: this.Message
          })
          console.log(response.data)
          this.sendSuccess = response.data.success
          this.timeOut()
          this.alert()
          this.Fullname = ''
          this.Email = ''
          this.Message = ''
        } catch (error) {
          this.error = error.response.data.error
          this.error_Email = error.response.data.error_Email
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    collapseStepper (stepperNo) {
      switch (stepperNo) {
        case 'stepper1':
          this.stepper1 = !this.stepper1
          this.stepper2 = false
          this.stepper3 = false
          break
        case 'stepper2':
          this.stepper1 = false
          this.stepper2 = !this.stepper2
          this.stepper3 = false
          break
        case 'stepper3':
          this.stepper1 = false
          this.stepper2 = false
          this.stepper3 = !this.stepper3
          break
      }
    },
    timeOut () {
      setTimeout(() => {
        this.btnDisabled = false
        this.preloaderSwitch = false
      }, 2300)
    },
    alert () {
      this.$swal('Nice!', this.sendSuccess, 'success')
    }
  },
  components: {
    Preloader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .getMore-send{
    padding-left: 10px;
  }
  .preloader{
    margin-top: 8px;
  }
  .stepper{
    padding-bottom: 20px;
  }
  .stepperContent{
    border-left: 2px solid teal;
  }
</style>
