<!-- 
    When creating new pages you need to update the navbar
 -->
<template>
  <nav
    v-if="!mobile"
    class="navbar navbar-expand-lg navbar-light bg-light mb-0 row align-self-center"
  >
    <div>
      <router-link to="/" class="home-title">GRAND</router-link>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-center">
        <li class="nav-item active">
          <router-link to="/">Start</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/kalender">Kalender</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">Om Bion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Kontakt</router-link>
        </li>
      </ul>
      <input
        class="form-control mr-sm-2"
        v-model="searchMovie"
        type="text"
        placeholder="Sök film"
        aria-label="Search"
      >
      <p v-show="linkURL">Gå till startsidan för att söka</p>
    </div>
  </nav>
  <!-- link page toggled on hamburger -->
  <section v-else>
    <transition
      name="show-mobile-links"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
      mode="out-in"
    >
      <nav v-show="toggleNav" id="nav-mobile-links">
        <h1 id="home-title">GRAND</h1>
        <section class="mobile-links mt-auto mb-auto">
          <router-link to="/">Start</router-link>
          <router-link to="/kalender">Kalender</router-link>
          <router-link to="/about">Om Bion</router-link>
          <router-link to="/contact">Kontakt</router-link>
        </section>
      </nav>
    </transition>
    <!-- the bottom navbar -->
    <div id="nav-mobile" class="p-2">
      <!-- hamburger -->
      <button
        @click="toggleNav = !toggleNav"
        class="navbar-toggler toggle-nav-mobile"
        type="button"
      >
        <div :class=" { open: toggleNav }" class="animated-icon2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <i v-show="onHomePage" class="fas fa-search" @click="toggleSearch"></i>
    </div>
    <transition
      name="searchbar"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <div v-show="searching" id="search-bar">
        <i class="fas fa-search"></i>
        <!-- search input -->
        <input type="text" v-model="searchMovie" placeholder="Sök film">
        <i class="fas fa-times" @click="toggleSearch"></i>
      </div>
    </transition>
  </section>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      searchMovie: "",
      searching: false,
      toggleNav: false,
      onHomePage: true,

      mobile: this.startMobile()
    };
  },
  watch: {
    searchMovie(input) {
      eventBus.$emit("search-query", input);
    }
  },
  computed: {
    linkURL() {
      if (this.searchMovie && location.pathname.length > 1) {
        return true;
      }
      return false;
    }
  },
  methods: {
    toggleSearch() {
      this.searching = !this.searching;
      this.searchMovie = "";
    },
    startMobile() {
      return window.innerWidth < 600 ? true : false;
    },
    toggleSearchButton() {
      if (location.pathname === "/") {
        this.onHomePage = true;
      } else {
        this.onHomePage = false;
      }
    }
  },
  created() {
    $(window).on("resize", () => {
      this.mobile = window.innerWidth < 600 ? true : false;
    });
  },
  mounted() {
    this.toggleSearchButton();

    $("nav a").on("click", () => {
      $("#navbarNav").removeClass("show");
    });
    $("body > div > div").on("click", () => {
      this.searchMovie = "";
      this.searching = false;
    });
    // toggles off the nav page on page change

    $("a").on("click", () => {
      this.toggleSearchButton();
      this.toggleNav = false;
    });
  }
};
</script>

<style>
:root {
  --main-background-color: whitesmoke;
  /*whitesmoke is for background and text inside special elements*/
  --main-element-color: #36454f; /*"CHARCOAL*/
  /*Charcoal is for text on main pages and navbar background*/
  --special-element-color: #b08a43; /*"BRASS"*/
  /*Brass is for special elements like buttons*/
  --main-font-family: "Montserrat", sans-serif;

  /* 
    Use global color-variables with:
    EXAMPLE: "color: var(--main-element-color);"
*/
}
#home-title {
  color: var(--special-element-color);
  font-weight: 400;
  text-shadow: 1px 1px var(--main-element-color);
  margin-top: 5vh;
}
nav {
  width: 100%;
  position: absolute;
  padding: 30px;
  background-color: var(--main-element-color);
  color: var(--special-element-color);
  font-family: var(--main-font-family);
  font-weight: 100;
  font-size: 1.3em;
}
.navbar {
  border-bottom: 1px solid #cca358;
}
#navbarNav input {
  width: 25%;
}
#navbarNav p {
  position: absolute;
  font-size: 0.7em;
  top: 7vh;
  right: 1%;
  width: 25%;
  border: 1px var(--main-element-color);
  color: var(--main-element-color);
  background-color: white;
}
#navbarNav input:focus {
  outline: none;
  box-shadow: none;
}
#nav-mobile-links > section {
  width: 100%;

  display: flex;
  flex-direction: column;
}
#nav-mobile-links {
  animation-duration: 300ms;
  position: fixed;
  padding-bottom: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 20px #36454f;
  background-color: var(--main-background-color);
}
#nav-mobile-links a {
  margin: 2%;
  font-weight: bold;
  color: var(--special-element-color);
}
#nav-mobile {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  color: var(--special-element-color);
  background-color: var(--main-element-color);
}
nav img {
  width: 1.5em;
  height: 1.5em;
  margin-right: 5px;
}
i {
  font-size: 1.4em;
  color: var(--special-element-color);
}
#nav-mobile i {
  position: fixed;
  right: 4%;
  bottom: 2%;
}
#nav-mobile i:hover {
  cursor: pointer;
}
#search-bar {
  animation-duration: 400ms;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 1100;
  color: var(--special-element-color);
  background-color: var(--main-element-color);
}
#search-bar .fa-search {
  margin-left: 4%;
}
#search-bar .fa-times:hover {
  cursor: pointer;
}
#search-bar .fa-times {
  font-size: 1.7em;
  margin-right: 4%;
}
#search-bar input {
  color: var(--main-background-color);
  height: 80%;
  width: 60%;
  border: none;
  border-radius: 2px;
  background-color: var(--main-element-color);
}
#search-bar input:focus {
  outline: none;
}
#search-bar input::placeholder {
  color: var(--main-background-color);
  opacity: 0.7;
}
nav a {
  font-weight: 400;
  color: var(--main-element-color);
}
nav > div > a {
  /* position: absolute; */
  font-size: 1.8em;
  top: 0;
  right: 3%;
}
nav > div > div {
  margin: 0;
}
nav > div > a:hover {
  text-decoration: none;
  color: var(--special-element-color);
}
.navbar-expand-lg li {
  text-align: start;
  margin-left: 3%;
}
ul {
  width: 100%;
}
li {
  margin-right: 3%;
}
li > a {
  font-size: 1.4em;
}
li > a:hover,
#nav-mobile-links a:hover {
  text-decoration: none;
  color: rgb(163, 127, 7);
}
li a.router-link-exact-active {
  color: rgb(255, 196, 0);
}

/* 
    MOBILE HAMBURGER
*/
.toggle-nav-mobile:focus {
  outline: none;
}
.animated-icon2 {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.animated-icon2 span {
  background: var(--special-element-color);
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.animated-icon2 span:nth-child(1) {
  top: 0px;
}

.animated-icon2 span:nth-child(2),
.animated-icon2 span:nth-child(3) {
  top: 10px;
}

.animated-icon2 span:nth-child(4) {
  top: 20px;
}

.animated-icon2.open span:nth-child(1) {
  top: 11px;
  width: 0%;
  left: 50%;
}

.animated-icon2.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.animated-icon2.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.animated-icon2.open span:nth-child(4) {
  top: 11px;
  width: 0%;
  left: 50%;
}
</style>
