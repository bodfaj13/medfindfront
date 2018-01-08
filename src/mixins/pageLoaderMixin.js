export const pageLoaderMixin = {
  data: () => ({
    landingLoader: true
  }),
  methods: {
    showLoader () {
      setTimeout(() => {
        this.landingLoader = false
      }, 2000)
    }
  },
  created: function () {
    this.showLoader()
  }
}
