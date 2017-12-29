<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary animated fadeInRight"     md-elevation="0">
        <md-button class="md-icon-button pointer" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title pointer" style="flex: 1">MyLogo<md-icon>local_hospital</md-icon></h3>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item class="pointer">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item class="pointer">
            <md-icon>question_answer</md-icon>
            <span class="md-list-item-text">Why MedFind?</span>
          </md-list-item>

          <md-list-item class="pointer">
            <md-icon>help_outline</md-icon>
            <span class="md-list-item-text">User Guide</span>
          </md-list-item>

          <md-list-item class="pointer">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div v-if="spinner">
          <center>
            <md-progress-spinner class="md-primary centerSpinner" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
          </center>
        </div>
        <div v-else class="animated fadeInUp">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus dolore nostrum est impedit doloribus voluptas assumenda quidem, sunt saepe dicta inventore obcaecati. Quod unde consequuntur corrupti harum vero blanditiis.
          Nam officia provident minus cumque voluptate libero itaque architecto eius odit eos! Sed odit eligendi veritatis non, expedita amet repellendus tenetur beatae! Repudiandae doloremque quod eos consectetur quaerat explicabo odit.
          Debitis, adipisci qui id, facere corporis blanditiis molestiae distinctio, minus fugiat porro at consequatur placeat aut nesciunt ab incidunt illo commodi accusantium earum impedit numquam? Adipisci quis neque labore soluta!
          Eaque sapiente soluta dolores perspiciatis ut a odit consectetur? Perspiciatis blanditiis labore consectetur corrupti laudantium ducimus quis nostrum suscipit beatae placeat voluptates, eaque exercitationem sunt. Perferendis, natus nostrum. Vero, distinctio!
          Nulla alias iure ullam nisi nihil nam explicabo et, inventore itaque eligendi saepe enim quibusdam praesentium nemo sapiente sunt reiciendis deserunt est perferendis qui! Sequi inventore dolorem blanditiis distinctio fugit.
          Saepe a eum debitis rerum vel, obcaecati perspiciatis reprehenderit deserunt temporibus, unde nesciunt quod provident id laboriosam atque delectus iste. Sequi excepturi temporibus, praesentium fugiat dolore quas aspernatur rerum vero.
          Dicta laboriosam qui aliquid quae, eos dignissimos perspiciatis sint aut. Expedita quidem nam laborum libero tenetur soluta debitis nesciunt ex, culpa eligendi odit quisquam veritatis architecto adipisci similique id maxime?
          Pariatur distinctio corrupti minima necessitatibus ad enim ipsa, quaerat ratione natus sequi unde odio quisquam ex quam hic illum dolorum ipsum. Distinctio eum placeat corporis soluta non facere doloremque aliquid?
          Ipsum, eaque id illum voluptatem reprehenderit doloremque quas est, deserunt amet veritatis voluptas architecto inventore ex eum accusamus eligendi facere. Doloremque necessitatibus dignissimos minus veritatis distinctio illo autem sunt qui.
          Soluta ipsam maiores saepe necessitatibus porro totam modi dolores fugiat odio, magnam autem provident quis quam ducimus explicabo illo facere natus laborum cum, quisquam nihil eligendi commodi, placeat eveniet? Vero.
          Recusandae, debitis maiores quas laborum animi, nihil eveniet labore doloremque cumque et pariatur! Nam id sequi repudiandae, porro maxime quidem alias, iure, mollitia quaerat odio vel non voluptas amet expedita.
          Obcaecati porro maiores nulla accusantium atque, corrupti debitis, rerum odit distinctio quas doloremque perspiciatis. Laboriosam voluptatem doloremque ex. Incidunt deleniti numquam tempore quisquam amet, sunt quam mollitia dolore nemo quidem.
          Odit, laborum quaerat fuga laudantium aliquid, quae dolor recusandae, pariatur incidunt ex amet alias asperiores molestias. Obcaecati, eum sit perspiciatis sed porro iste quaerat qui iusto ea reiciendis doloribus eaque.
          Praesentium consectetur tempora aliquid veritatis cumque minus illo officiis alias explicabo in corrupti repudiandae nemo inventore numquam maiores optio saepe natus ab iste aliquam omnis cupiditate, soluta eos! Rem, dignissimos.
          A deleniti nulla eos alias explicabo cupiditate voluptatibus eveniet velit repellendus, vitae quod similique deserunt nostrum ut, illum maiores accusamus dignissimos repudiandae modi placeat ex? Ratione repellendus architecto maiores quis.
          Maxime, odio praesentium! Error dignissimos vel nulla maxime corporis, est dolorum odit aliquid voluptatum iure. Perspiciatis recusandae fugit ea, cumque optio quibusdam cupiditate obcaecati dicta incidunt, ullam eius esse ducimus.
          perspiciatis sed porro iste quaerat qui iusto ea reiciendis doloribus eaque.
          Praesentium consectetur tempora aliquid veritatis cumque minus illo officiis alias explicabo in corrupti repudiandae nemo inventore numquam maiores optio saepe natus ab iste aliquam omnis cupiditate, soluta eos! Rem, dignissimos.
          A deleniti nulla eos alias explicabo cupiditate voluptatibus eveniet velit repellendus, vitae quod similique deserunt nostrum ut, illum maiores accusamus dignissimos repudiandae modi placeat ex? Ratione repellendus architecto maiores quis.
          Maxime, odio praesentium! Error dignissimos vel nulla maxime corporis, est dolorum odit aliquid voluptatum iure. Perspiciatis recusandae fugit ea, cumque optio quibusdam cupiditate obcaecati dicta incidunt, ullam eius esse ducimus.
          perspiciatis sed porro iste quaerat qui iusto ea reiciendis doloribus eaque.
          Praesentium consectetur tempora aliquid veritatis cumque minus illo officiis alias explicabo in corrupti repudiandae nemo inventore numquam maiores optio saepe natus ab iste aliquam omnis cupiditate, soluta eos! Rem, dignissimos.
          A deleniti nulla eos alias explicabo cupiditate voluptatibus eveniet velit repellendus, vitae quod similique deserunt nostrum ut, illum maiores accusamus dignissimos repudiandae modi placeat ex? Ratione repellendus architecto maiores quis.
          Maxime, odio praesentium! Error dignissimos vel nulla maxime corporis, est dolorum odit aliquid voluptatum iure. Perspiciatis recusandae fugit ea, cumque optio quibusdam cupiditate obcaecati dicta incidunt, ullam eius esse ducimus.
          perspiciatis sed porro iste quaerat qui iusto ea reiciendis doloribus eaque.
          Praesentium consectetur tempora aliquid veritatis cumque minus illo officiis alias explicabo in corrupti repudiandae nemo inventore numquam maiores optio saepe natus ab iste aliquam omnis cupiditate, soluta eos! Rem, dignissimos.
          A deleniti nulla eos alias explicabo cupiditate voluptatibus eveniet velit repellendus, vitae quod similique deserunt nostrum ut, illum maiores accusamus dignissimos repudiandae modi placeat ex? Ratione repellendus architecto maiores quis.
          Maxime, odio praesentium! Error dignissimos vel nulla maxime corporis, est dolorum odit aliquid voluptatum iure. Perspiciatis recusandae fugit ea, cumque optio quibusdam cupiditate obcaecati dicta incidunt, ullam eius esse ducimus.
        </div>   
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'appBody',
    data: () => ({
      spinner: true,
      menuVisible: true
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    },
    beforeMount: function () {
      var width = window.innerWidth
      if (width < 600) {
        this.menuVisible = false
      }
    },
    mounted: function () {
      setTimeout((spinner) => {
        this.spinner = false
      }, 5000)
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    max-height: 700px;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

   .centerSpinner{
    margin: 250px 0 250px 0;
  }

  .pointer{
    cursor: pointer;
  }
</style>