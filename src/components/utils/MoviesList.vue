<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="movie in movies" :key="movie.id" class="card col-3">

        <router-link id="link" :to="`/MovieDetails/${movie.id}`">
          <img
            v-bind:src="preUrl + movie.poster_path"
            alt="moviePoster"
            class="card-img-top"
          />
        </router-link>

        <div class="card-body">

          <h5 class="card-title">{{ movie.title }}</h5>
          
          <p class="card-text" style="text-align: justify;">
            {{ movie.overview.substring(0, 200) + "..." }}
          </p>

          <p v-if="movie.vote_average == '0'">non noté</p>
          <p v-else>
            {{ movie.vote_average }}
          </p>

          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: ["movies", "loading", "errored"],
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
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
  margin-top: 60px;
}

.card-img-top {
  width: 70%;
  margin: auto;
  margin-top: 10px;
}
</style>
