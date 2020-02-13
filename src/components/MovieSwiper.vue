<!-- 
    Documentation on how to work with
    the calendar component
    http://idangero.us/swiper/api/
 -->

<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(movie, index) in movies" :key="index" class="swipe-item">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/' + movie.Link">
            <img v-bind:src="movie.Poster" class="img-fluid">
          </router-link>
        </figure>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import $ from "jquery";

export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: this.startMobile(),
        spaceBetween: 2,
        freeMode: true,
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    //
    startMobile() {
      return window.innerWidth < 768
        ? 2.3
        : window.innerWidth < 992
        ? 4.3
        : window.innerWidth < 1500
        ? 5.3
        : 6.3;
    }
  },
  created() {
    $(window).on("resize", () => {
      this.swiperOption.slidesPerView = window.innerWidth < 700 ? 2.3 : 5.3;
    });
  }
};
</script>

<style>
.swiper-box {
  height: 29 vmax;
  overflow: hidden;
  border-style: solid;
  border-color: transparent;
  border-width: 0 0 7vh;
}
.swipe-item {
  height: 100%;
}
.posters {
  width: 100%;
  height: 30vh;
}
.posters img {
  height: auto;
  width: auto;
  max-width: 30vh;
  max-height: 30vh;
}
.swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.418);
  border-radius: 40%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%2336454f'%2F%3E%3C%2Fsvg%3E") !important;
}

.swiper-button-next {
  background-color: rgba(255, 255, 255, 0.418);
  border-radius: 40%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%2336454f'%2F%3E%3C%2Fsvg%3E") !important;
}

@media only screen and (max-width: 700px) {
  .posters {
    height: 30vmax;
  }
  .swiper-button-next {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }

  .posters img {
    height: auto;
    width: auto;
    max-width: 55vw;
    max-height: 55vw;
  }

  .swiper-box {
    border-width: 0 0 10vw;
  }
}
</style>
