import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import TopRatedMovies from "./components/TopRatedMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import SearchMovies from "./components/SearchMovies.vue";
import MovieDetails from "./components/MovieDetails.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/AmericanMovies',
    component: AmericanMovies
  },
  {
    path: '/FrenchMovies',
    component: FrenchMovies
  },
  {
    path: '/TopRatedMovies',
    component: TopRatedMovies
  },
  {
    path: '/LastMovies',
    component: LastMovies
  },
  {
    path: '/SearchMovies',
    component: SearchMovies
  },
  {
    path: '/MovieDetails/:id',
    component: MovieDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')