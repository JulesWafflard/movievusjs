<template>
  <div v-if="loading">Chargement...</div>
  <div v-else>
    <div
      class="container-fluid"
      style="background-size: cover; height: 400px"
      :style="{ backgroundImage: `url(${preUrl + movie.backdrop_path})` }"
    ></div>

    <div class="container" style="margin-top:50px; margin-bottom:50px;">
      <div class="row">
        <div class="col-5">
          <img
            style="width: 100%"
            v-bind:src="preUrl + movie.poster_path"
            alt="moviePoster"
          />
        </div>

        <div class="col-7">
          <h1>
            <strong>{{ movie.title }}</strong>
          </h1>
          <div v-if="movie.tagline">
            <h5 class="font-italic">"{{ movie.tagline }}"</h5>
          </div>

          <p>
            <b>Sortie :</b>
            <span v-if="movie.release_date">
              {{
                movie.release_date
                  | dateParse("DD-MM-YYYY")
                  | dateFormat("MMMM D, YYYY")
              }}
            </span>
            <span v-else> date non déterminée </span>
          </p>

          <p>
            <b>Note moyenne : </b>
            <span v-if="movie.vote_average == '0'"> non noté </span>
            <span v-else>
              {{ movie.vote_average }}
            </span>
          </p>

          <p><b> Titre original : </b>{{ movie.original_title }}</p>

          <p><b>Langue originale : </b>{{ movie.original_language }}</p>

          <div v-if="video[0]">
            <iframe
              width="100%"
              height="300"
              v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="shadow"
            ></iframe>
          </div>

          <div style="margin-top:20px; text-align: justify;"><b> Résumé : </b>{{ movie.overview }}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
      preUrl: "https://image.tmdb.org/t/p/original/",
      loading: true,
      errored: false,
      video: [],
    };
  },
  methods: {
    getMovieById(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
        )
        .then(function (response) {
          component.loading = false;
          component.movie = response.data;
          console.log(component.movie);
        })
        .catch(function () {
          component.errored = true;
        });
    },
    getVideo(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
        )
        .then((response) => {
          component.video = response.data.results;
          console.log(component.video);
        });
    },
  },
  created() {
    this.getMovieById(this);
    this.getVideo(this);
  },
};
</script>

<style scoped>

</style>