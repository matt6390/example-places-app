/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Places to Be!",
      newPlace: { name: "", address: "" },
      places: []
    };
  },
  created: function() {
    axios.get("/places").then(
      function(response) {
        this.places = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
