var appId = 'b0c1b0d80fc7d60d873fbaca2e79f0e87a88c652f8da4d49296c0bf63f133fe1'

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  methods: {
    fetchPhotos: function(page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

        this.photos = response.data

        this.totalPhotos = parseInt(response.headers.get('x-total'))

        this.currentPage = page

      }, console.log)
    }
  },
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})