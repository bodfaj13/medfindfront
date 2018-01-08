<template>
  <div class="content">
    <div class="navbar-fixed">
      <nav class="teal medfind-top">
        <div class="nav-wrapper">
          <div class="left">
            <a class="breadcrumb">Medfind</a>
            <a class="breadcrumb">{{this.$route.name}}</a>
          </div>
          <div class="right">
            <slot></slot>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbV2',
  data: () => ({
    msg: 'Welcome to dummy BreadCrumbV2!'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .medfind-top{
    padding-left: 30px;
    padding-right: 30px;
  }
  @media only screen and (max-width: 600px) {
    .medfind-top{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 992px) {
    .medfind-top{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
