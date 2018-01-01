<template>
  <div class="content animated fadeInUp">
    <div class="container">
      <div class="row">
        <div class="col l6 m12">
          <h4>Note:</h4>
          <p>Here is a quick user quide to help you around the application</p>
          <div class="steps">
            <div class="row">

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
                        <input id="user_fullname" type="text" class="validate">
                        <label for="user_fullname">Full Name</label>
                      </div>
                      <div class="input-field col s12 m6 l12">
                        <i class="material-icons prefix">email</i>
                        <input id="user_email" type="email" class="validate">
                        <label for="user_email">Email</label>
                        <!-- <span class="helper-text" data-error="wrong" data-success="right"></span> -->
                      </div>
                      <div class="input-field col s12 m12 l12">
                        <i class="material-icons prefix">textsms</i>
                        <textarea id="user_msg" class="materialize-textarea"></textarea>
                        <label for="user_msg">Message</label>
                      </div>
                      <div class="col s12 m12 l12">
                        <button class="waves-effect waves-light btn-large col s12 m12 l12" @click="sendMsg">
                          <div class="col l2 s2 m2" v-show="preloaderSwitch">
                            <Preloader class="preloader"></Preloader>
                          </div>
                          <div class="col l8 s8 m8">
                            send
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
export default {
  name: 'UserGuideBody',
  data: () => ({
    msg: 'Welcome to UserGuideBody Component!',
    preloaderSwitch: true
  }),
  methods: {
    sendMsg (e) {
      e.preventDefault()
      console.log(`true from sendMsg`)
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
</style>
