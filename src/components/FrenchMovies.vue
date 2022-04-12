<template>
<div>

  <h1 class="pt-5 font-weight-light">Films français</h1>
  <MoviesList :movies="movies" :loading="loading" :errored="errored" />

</div>
</template>

<script>

import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";

export default {
  name: "FrenchMovies",
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    sortMovies(movies) {
      this.movies = movies;
    },
    getFrenchMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr&with_original_language=fr&vote_count.gte=1000&include_adult=false&page=1"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie/?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr&with_original_language=fr&vote_count.gte=1000&include_adult=false&page=2"
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
    this.getFrenchMovies(this);
  },
};
</script>