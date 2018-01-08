<template>
  <div class="content animated fadeInLeft">
    <nav class="teal">
      <div class="nav-wrapper container">
        <div class="col s12">
          <a class="breadcrumb">Medfind</a>
          <a class="breadcrumb">{{this.$route.name}}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data: () => ({
    msg: 'Welcome to BreadCrumb Component!'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
