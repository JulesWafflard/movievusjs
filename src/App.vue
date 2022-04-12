<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
      <!-- si la route est / (racine du site) -->
      <h1 class="pt-5 font-weight-light">
        Vos films préférés sont sur VueJS Movies !
      </h1>
      <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <!-- si la route est différente de / -->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from "./components/template/HeaderNav.vue";
import MoviesList from "./components/utils/MoviesList.vue";
import FooterApp from "./components/template/FooterApp.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderNav,
    MoviesList,
    FooterApp,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  methods: {
    getAllMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr&sort_by=popularity.desc&page=1"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie/?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr&sort_by=popularity.desc&page=2"
            )
            .then(function (response) {
              component.loading = false;
              response.data.results.forEach(function (movie) {
                component.movies.push(movie);
              });
              console.log(component.movies);
            })
            .catch(function () {
              component.errored = true;
            });
        })
        .catch(function () {
          component.errored = true;
        });
    },
  },
  created() {
    this.getAllMovies(this);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -60px;
}
</style>
