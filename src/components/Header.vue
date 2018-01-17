<template>
  <div class="content">
    <div class="navbar-fixed">
      <nav class="nav-extended white">
        <div class="nav-wrapper container">
          <router-link to="/" id="logo-container" class="brand-logo left">MedFind</router-link>
          <!-- <a id="logo-container" href="#" class="brand-logo">MedFind</a> -->
          <ul class="right hide-on-med-and-down">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/userguide" tag="li" active-class="active"><a>User Guide</a></router-link>
            <router-link to="/adduser" tag="li" active-class="active"><a>Users</a></router-link>
            <router-link to="/admin" tag="li" active-class="active"><a>Admin</a></router-link>
          </ul>
          <ul class="right hide-on-large-only">
            <li><a href="#" @click="menuShowBtn"><i class="material-icons" ref="menuBtn">menu</i></a></li>
          </ul>
        </div>
        <div class="nav-content container animated" v-if="menuShow" :class="{slideInDown: menuShow}">
          <ul class="tabs">
            <router-link to="/" class="black-text tab" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/userguide" class="black-text tab" tag="li" active-class="active"><a>User Guide</a></router-link>
            <router-link to="/adduser" class="black-text tab" tag="li" active-class="active"><a>Users</a></router-link>
            <router-link to="/admin" class="black-text tab" tag="li" active-class="active"><a>Admin</a></router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    msg: 'Welcome to Header Component!',
    menuShow: false
  }),
  methods: {
    menuShowBtn (e) {
      e.preventDefault()
      this.menuShow = !this.menuShow
      if (this.menuShow) {
        this.$refs.menuBtn.innerText = 'close'
      }
      if (!this.menuShow) {
        this.$refs.menuBtn.innerText = 'menu'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"scoped>
  .tabs .tab a {
    color: #000;
  }
</style>
