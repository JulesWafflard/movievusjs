<template>
  <div>

    <h1 class="pt-5 font-weight-light">Top 50</h1>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />

  </div>
</template>

<script>
import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";

export default {
  name: "TopRatedMovies",
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
    getAmericanMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr-FR&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_count.gte=1000"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=7914af5d9edbf33eb6f5ff601bafcfe4&language=fr-FR&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate&vote_count.gte=1000"
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
    this.getAmericanMovies(this);
  },
};
</script>