<template>
  <div id="app" class="container shadow">
    <!-- HEADER -->
    <NavBar/>
    <!-- MAIN VIEW -->
    <transition
      name="animate-route"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view/>
    </transition>
    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer,
  }
};
</script>

<style src="./style.css"></style>
