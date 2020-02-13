import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Kalender from "./views/Calendar.vue";
import MovieInfo from "./views/MovieInfo.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue"; 
import MissingPage from "./views/MissingPage.vue";
import Booking from "./views/Booking.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/kalender",
      name: "Kalender",
      component: Kalender
    },
    {
      path: "/movieinfo/:link",
      name: "MovieInfo",
      component: MovieInfo
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/book/:link",
      name: "booking",
      component: Booking
    },
    // using path "*" matches every route
    // put this last to catch all missing routes
    {
      path: "*",
      name: "Missing-Page",
      component: MissingPage
    }
  ]
});
