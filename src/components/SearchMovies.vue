<template>
  <div>

    <div class="container" style="margin-top: 50px; margin-bottom: 50px;">
        <h1>Rechercher un film</h1>
        <input type="text" v-model="query" placeholder="Rechercher un film" @keyup="getSearchMovies(query)">
    </div>

    <div v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    
    <div v-else>
      <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>

  </div>
</template>

<script>
import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";

export default {
  name: "SearchMovies",
  components: { MoviesList },
  data() {
    return {
      query: "",
      movies: [],
    };
  },
  methods: {
    getSearchMovies(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&include_adult=false&query=" +
            query
        )
        .then((response) => {
          this.movies = response.data.results;
        });
      console.log(this.results);
    },
  },
};
</script>

<style scoped>
</style>