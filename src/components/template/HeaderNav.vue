<template>
  <header class="bg-light">
    <h1 class="p-5" id="title">VUE JS MOVIES</h1>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #e3f2fd"
    >
      <div class="container">
        <router-link to="/" active-class="active" class=" text-center">VUE JS MOVIES</router-link>            
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/FrenchMovies" active-class="active" class="nav-link text-center">Films français</router-link>            
            </li>
            <li class="nav-item">
                <router-link to="/AmericanMovies" active-class="active" class="nav-link">Films américains</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/TopRatedMovies" active-class="active" class="nav-link">Top 50 : les mieux notés</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/LastMovies" active-class="active" class="nav-link">Films de 2021</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/SearchMovies" active-class="active" class="nav-link">Rechercher un film</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped>
header {
  margin-top: 60px;
  margin-top: 60px;
}
</style>