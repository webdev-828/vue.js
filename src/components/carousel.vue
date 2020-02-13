<template>
  <div class="Carousel row container mx-auto">
    <!--  <div id="slider">  ### SLIDER ###
      <infinite-slide-bar :barStyle="{ background: '#CC0020', padding: '5px 0' }">
        <span
          style="color: #FFFFFF;"
        >Aquaman 12:00 Aquaman 14:00 Aquaman 16:00 Aquaman 18:00 Aquaman 20:00</span>
      </infinite-slide-bar>
    </div>-->
    
    <!-- ### Carousel START ### -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-8 m-auto">
          <div id="slider4" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li class="active" data-target="#slider4" data-slide-to="0"></li>
              <li data-target="#slider4" data-slide-to="1"></li>
              <li data-target="#slider4" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <router-link to="/movieinfo/Aquaman">
                <img
                  class="d-block img-fluid"
                  src="https://hdqwalls.com/download/aquaman-2018-movie-i4-1920x1080.jpg"
                  alt="First Slide"
                >
                </router-link>
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">Aquaman</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  ><router-link id="light" to="/movieinfo/Aquaman">Till filmen</router-link></button>
                </div>
              </div>
              <div class="carousel-item">
                <router-link to="/movieinfo/Lego+movie+2">
                <img
                  class="d-block img-fluid"
                  src="https://stmed.net/sites/default/files/the-lego-movie-videogame-hd-wallpapers-33794-3561044.jpg"
                  alt="Second Slide"
                >
                </router-link>
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">The Lego Movie 2</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  ><router-link id="light" to="/movieinfo/Lego+movie+2">Till filmen</router-link></button>
                </div>
              </div>
              <div class="carousel-item">
                <router-link to="/movieinfo/Glass">
                <img
                  class="d-block img-fluid"
                  src="https://images7.alphacoders.com/931/thumb-1920-931303.png"
                >

                </router-link>
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">Glass</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  ><router-link id="light" to="/movieinfo/Glass">Till filmen</router-link></button>
                </div>
              </div>
            </div>

            <a href="#slider4" class="carousel-control-prev" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            
            <a href="#slider4" class="carousel-control-next" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ### Carousel END -->
  </div>
</template>


<script>
/* eslint-disable */
export default {
  components: {
    /*  InfiniteSlideBar  ### SLIDER ### */
  },
  name: "Carousel"
};
</script>




<style scoped>
/* #slider {        ### SLIDER ###
  overflow: hidden;
} */

/* ### Carousel CSS START ### */
button {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

a:hover {
  text-decoration: none;
}

#dark {
  color: rgb(0, 11, 31);
}

#light {
  color: rgb(255, 255, 255);
  text-shadow: 3px 3px 5px #000000;
}
h2 {
  animation-delay: 1s;
}

.buy {
  animation-delay: 1.5s;
  text-shadow: 2px 2px 4px #000000;
}

.buy:hover {
  color: rgb(255, 255, 255);
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  background-color: #f8f8f846;
}
/* ### Carousel CSS END ### */

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.alert {
  margin: 10% auto;
}
/* @media only screen and (max-width: 777px) {
  .container {
    display: none;
  }
} */
</style>