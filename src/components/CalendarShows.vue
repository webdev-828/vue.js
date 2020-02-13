<template>
  <div v-if="onDesktop" id="calendar-shows">
    <div>
      <!-- 
        loop and outputs the 3 movies on selected date
      -->
      <div v-for="(show, index) in day.shows" :key="day + show.movie + index" class="row">
        <figure class="col-3">
          <!-- 
              when clicking on picture the user gets
              sent to the movies info page
          -->
          <router-link v-bind:to="'/movieinfo/' + movies[index].Link">
            <img v-bind:src="movies[index].Poster" class="img-fluid">
          </router-link>
        </figure>
        <article class="col-9">
          <!-- 
              creates a unique route path on each movie
          -->
          <router-link v-bind:to="'/book/' + day.link + index">
            <h5 class="mb-0">{{ day.shows[index].movie }}</h5>
          </router-link>
          <p class="mb-2">Genre: {{ movies[index].Genre }}</p>
          <article class="d-flex justify-content-between">
            <p>
              <strong>{{ day.shows[index].auditorium.name }}</strong>
            </p>
            <p
              class="text-right"
            >Platser kvar: {{ day.shows[index].auditorium.seatsLeft }} av {{ day.shows[index].auditorium.maxSeats }}</p>
          </article>
          <article class="d-flex justify-content-between">
            <p>Tid: {{ day.shows[index].time }}</p>
            <p class="text-right">Speltid: {{ movies[index].Runtime }}</p>
          </article>
        </article>
        <span v-if="index < 2" id="break-line"></span>
      </div>
    </div>
  </div>
  <div v-else id="calendar-shows">
    <transition-group
      name="date-movie-list"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <!-- 
        loop and outputs the 3 movies on selected date
      -->
      <div v-for="(show, index) in day.shows" :key="day + show.movie + index" class="row">
        <figure class="col-3">
          <!-- 
              when clicking on picture the user gets
              sent to the movies info page
          -->
          <router-link v-bind:to="'/movieinfo/' + movies[index].Link">
            <img v-bind:src="movies[index].Poster" class="img-fluid">
          </router-link>
        </figure>
        <article class="col-9">
          <!-- 
              creates a unique route path on each movie
          -->
          <router-link v-bind:to="'/book/' + day.link + index">
            <h5 class="mb-0">{{ day.shows[index].movie }}</h5>
          </router-link>
          <p class="mb-2">Genre: {{ movies[index].Genre }}</p>
          <article class="d-flex justify-content-between">
            <p>
              <strong>{{ day.shows[index].auditorium.name }}</strong>
            </p>
            <p
              class="text-right"
            >Platser kvar: {{ day.shows[index].auditorium.seatsLeft }} av {{ day.shows[index].auditorium.maxSeats }}</p>
          </article>
          <article class="d-flex justify-content-between">
            <p>Tid: {{ day.shows[index].time }}</p>
            <p class="text-right">Speltid: {{ movies[index].Runtime }}</p>
          </article>
        </article>
        <span v-if="index < 2" id="break-line"></span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  props: {
    clickedDate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      day: {},
      onDesktop: this.startDesktop()
    };
  },
  computed: {
    // calls method for finding each movie, then
    // returns it as an array to be outputted
    movies: function() {
      return [
        this.getMovie(this.day.shows[0].movie),
        this.getMovie(this.day.shows[1].movie),
        this.getMovie(this.day.shows[2].movie)
      ];
    }
  },
  methods: {
    // method for finding a movie in stored movies array
    getMovie: function(movie) {
      for (let film of this.$store.movies) {
        if (movie === film.Title) {
          return film;
        }
      }
    },
    startDesktop() {
      return window.innerWidth > 600 ? true : false;
    }
  },
  created() {
    // when a new date is clicked
    // this event is called, and the new date
    // is transmitted here
    // and the shows array is looped and checked
    // for a match with current date
    eventBus.$on("showDay", date => {
      for (let day in this.$store.shows) {
        let data = this.$store.shows[day];
        if (data.date === date) {
          this.day = data;
          // hash is added as link, to create
          // a unique route to each booking page
          this.day.link = day;
        }
      }
    });

$(window).on("resize", () => {
      this.onDesktop = window.innerWidth < 600 ? true : false;
    });
  }
};
</script>

<style scoped>
#calendar-shows {
  text-align: start;
}
#calendar-shows p {
  font-size: 0.8em;
  margin: 0;
}
#calendar-shows a {
  color: var(--main-element-color);
}
#calendar-shows a:hover {
  color: var(--special-element-color);
  text-decoration: none;
}
#calendar-shows div {
  animation-duration: 150ms;
}
#break-line {
  margin: 2% auto 3%;
  width: 90%;
  height: 1px;
  background-color: lightgray;
}
</style>
