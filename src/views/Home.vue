<template>
  <div class="home">
    <header>
      <h1 class="mobile-title home-title">GRAND</h1>
    </header>
    <div v-if="!searchMovie">
    <Carousel id="carousel"/>
      <h3 class="category-text mb-0 mt-3 ml-3">Topplista</h3>
      
      <MovieSwiper :movies="[...topMovies()]" class="col-12"/>

      <h3 class="category-text mb-0 mt-3 ml-3">Drama</h3>
      
      <MovieSwiper :movies="[...moviesByGenre('Drama')]" class="col-12"/>

      <h3 class="category-text mb-0 mt-3 ml-3">Action</h3>
      
      <MovieSwiper :movies="[...moviesByGenre('Action')]" class="col-12"/>

      <h3 class="category-text mb-0 mt-3 ml-3">Barn</h3>
      
      <MovieSwiper :movies="[...moviesByGenre('Family')]" class="col-12"/>
    </div>

    <div v-else>
      <GraphicList :searchedMovies="[...filteredMovies]" id="graphic-list"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// need to import components to add to the view
// @ is an alias to /src
import GraphicList from "@/components/GraphicList.vue";
import Carousel from "@/components/carousel.vue";
import ShowSchedule from "@/components/ShowSchedule.vue";
import MovieSwiper from "@/components/MovieSwiper.vue";
import { eventBus } from "@/main";

export default {
  name: "home",
  data() {
    return {
      searchMovie: "",
      movies: []
    };
  },
  computed: {
    filteredMovies() {
      let filter = new RegExp(this.searchMovie, "i");
      return this.movies.filter(el => el.Title.match(filter));
    }
  },
  methods: {
    moviesByGenre(genre) {
      //let filter = new RegExp(this.searchMovie, "i");
      this.genre = genre;
      return this.movies.filter(el => el.Genre.match(genre));
    },
    topMovies() {
      return this.movies.sort(function(a, b) {
        return b.imdbRating - a.imdbRating;
      });
    }
  },
  watch: {
    movies() {
      this.$store.movies = this.movies;
    }
  },
  components: {
    GraphicList,
    Carousel,
    ShowSchedule,
    MovieSwiper
  },
  created() {
    this.movies = this.$store.movies;

    eventBus.$on("search-query", query => {
      this.searchMovie = query;
    });
  }
};
</script>

<style>
.home input:focus {
  outline: none;
}
.home input {
  margin: 5%;
  color: white;
  border-radius: 20px;
  background-color: rgba(131, 130, 130, 0.568);
}
.movie-content {
  display: flex;
  flex-direction: row;
}
#schedule-comp {
  width: 25vw;
}
.category-text {
  text-align: left;
}

.home-title {
  color: var(--special-element-color);
  font-weight: 400;
  text-shadow: 1px 1px var(--main-element-color);
  margin-top: 5vh;
}
.mobile-title {
  display: none;
}
@media screen and (max-width: 777px) {
  .movie-content {
    flex-direction: column;
  }
  #graphic-list {
    padding-top: 5%;
  }
  #schedule-comp {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
.mobile-title {
    display: block;
  }
}
</style>