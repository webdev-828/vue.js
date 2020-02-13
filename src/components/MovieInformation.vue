<template>
<div class="row container m-0 p-0">
    <h1 class="col-12 pt-3 pb-3 m-0 h1-custom-size">{{ movie.Title }}</h1>
    <!-- MOVIE BG MOBILE -->
    <div class="mobile-movie-bg col-12 pl-0 pr-0 pb-0">
        <picture class="img-fluid">
            <img v-bind:src="movie.PictureBackground">
      </picture>
            <div class="dropdown show col-12 adjust-div hide-on-desktop">
                <button
          class="button dropdown-toggle text-white btn-brass adjust-btn mr-4"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Boka</button>

                <div class="dropdown-menu dropdown-height" aria-labelledby="dropdownMenuLink">
                    <router-link class="dropdown-item" v-for="(info, index) in movieShows" :key="info.time + info.date + index" v-bind:to="'/book/' + info.key">{{ info.date }} {{ info.time }}</router-link>
                </div>
                <button
          type="button"
          class="text-white btn-brass adjust-btn ml-4"
          data-toggle="modal"
          data-target="#exampleModal"
        >Trailer</button>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{ movie.Title }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                        </div>
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe
                  class="embeded-responsive embeded-responsive-16by9"
                  :src="'https://www.youtube.com/embed/' + movie.Trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="row col-sm-12 col-md-12 justify-content-center">
        <!--hide-on-mobile hides this on mobile and only shows it on desktop -->
        <div class="col-sm-12 col-md-5 row hide-on-mobile pr-5 pl-5 justify-content-center">
            <picture class="img-fluid hide-on-mobile">
                <img v-bind:src="movie.Poster">
        </picture>
                <div class="dropdown show col-12 mt-2 ">
                    <button
          class="button dropdown-toggle  text-white btn-brass-desktop btn-bras-desktop:hover hide-on-mobile"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Boka</button>

                    <div class="dropdown-menu dropdown-height" aria-labelledby="dropdownMenuLink">
                        <router-link class="dropdown-item" v-for="(info, index) in movieShows" :key="info.time + info.date + index" v-bind:to="'/book/' + info.key">{{ info.date }} {{ info.time }}</router-link>
                    </div>
                </div>
        </div>

        <div class="col-sm-12 col-md-7 hide-on-mobile pr-5 pl-5 mb-1">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
            class="embeded-responsive embeded-responsive-16by9"
            v-bind:src="'https://www.youtube.com/embed/' + movie.Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </div>
            <div class="row m-1">
                <p class="mobile-p">
                    <p class="mobile-p">{{ movie.Plot }}</p>
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-12 mt-2 mb-4 desktop-margin-info mobile-margin-info">
        <div class="row">
            <p class="mobile-p hide-on-desktop">
                <p class="mobile-p hide-on-desktop">{{ movie.Plot }}</p>
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Speltid:</strong>
                {{ movie.Runtime }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Genre:</strong>
                {{ movie.Genre }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Skådespelare:</strong>
                {{ movie.Actors }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Regi:</strong>
                {{ movie.Director }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Språk:</strong>
                {{ movie.Language }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Undertext:</strong> svenska
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Åldersrating:</strong>
                {{ movie.Rated }}
            </p>
        </div>
        <div class="row">
            <p class="mobile-p">
                <strong>Biljettpris:</strong> Vuxna 100 kr, barn(6-18 år) 60 kr
            </p>
        </div>

        <!-- DESKTOP RECENSIONER -->
        <div class="row hide-on-mobile mt-2">
            <h3 class="mobile-p hide-on-mobile">Recensioner</h3>
        </div>
        <div v-for="(ratings, index) in movie.Ratings" :key="ratings.Source + ratings.Value + index" class="hide-on-mobile">
            <p class="mobile-p hide-on-mobile">
                <p class="mobile-p row">{{ ratings.Source }} {{ ratings.Value }}</p>
            </p>
        </div>
    </div>
    <!-- MOBIL RECENSIONER -->
    <div class="col-sm-12 col-md-12 hide-on-desktop mobile-margin-info">
        <h3 class="row mobile-margin-info ml-2">Recensioner</h3>
        <div class="col m-0 p-0" v-for="(ratings, index) in movie.Ratings" :key="ratings.Source + ratings.Value + index">
            <p class="mobile-p">
                <p class="row mobile-p row ml-2 p-0">{{ ratings.Source }} {{ ratings.Value }}</p>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import {
    eventBus
} from "@/main";

/* eslint-disable */
export default {
    name: "MovieInformation",
    data() {
        return {
            week: [{
                    day: "fre",
                    date: "2019-01-25"
                },
                {
                    day: "lör",
                    date: "2019-01-26"
                },
                {
                    day: "sön",
                    date: "2019-01-27"
                },
                {
                    day: "mån",
                    date: "2019-01-28"
                },
                {
                    day: "tis",
                    date: "2019-01-29"
                },
                {
                    day: "ons",
                    date: "2019-01-30"
                }
            ]
        };
    },
    computed: {
        movie() {
            let link = location.pathname.replace("/movieinfo/", "");

            for (let film of this.$store.movies) {
                if (film.Link === link) {
                    return film;
                }
            }
        },
        movieShows() {
            this.movie.Title;
            let tempArray = [];

            for (let day in this.$store.shows) {
                let today = this.$store.shows[day];

                for (let show = 0; show < today.shows.length; show++) {
                    let datesShow = today.shows[show];
                    if (datesShow.movie === this.movie.Title) {
                        let key = day + show;
                        tempArray.push({
                            key: key,
                            date: today.date,
                            time: datesShow.time
                        });
                    }
                }
            }
            console.log(tempArray);

            return tempArray;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.dropdown-height {
    max-height: 40vh;
    overflow: auto;
}

button:focus {
    outline: none;
}

.desktop-margin-info {
    margin-left: 50px;
}

picture {
    width: 100%;
}

img {
    width: 100%;
}

.embed-responsive {
    border-radius: 10px;
}

.mobile-p {
    padding-bottom: 0.2rem;
    padding-left: 0;
    margin-bottom: 0;
    letter-spacing: 0.025rem;
    text-align: start;
}

.mobile-p p {
    padding-left: 0;
    margin-left: 0;
}

.hide-on-desktop {
    display: none;
}

.hide-on-mobile {
    display: block;
}

.mobile-movie-bg {
    display: none;
}

.btn-brass-desktop {
    background: #b08a43;
    text-align: center;
    padding: 4px 10px;
    border-radius: 5px;
    border: transparent;
    top: -20%;
    cursor: pointer;
    width: 250px;
}

.btn-brass-desktop:hover {
    background: #b08a43be;
}

.h1-custom-size {
    font-size: 3rem !important;
}

@media screen and (max-width: 1024px) {
    .desktop-margin-info {
        margin-left: 0;
    }

    .h1-custom-size {
        font-size: 2rem !important;
    }

    .mobile-margin-info {
        margin: 0;
    }

    .hide-on-desktop {
        display: block;
    }

    picture {
        width: 100%;
    }

    img {
        width: 100%;
    }

    .mobile-movie-bg {
        display: block;
        background-size: cover;
        min-height: 30vh;
    }

    .mobile-movie-bg {
        display: block;
        background-size: cover;
        min-height: 30vh;
    }

    .hide-on-mobile {
        display: none;
    }

    .mobile-p {
        padding-bottom: 0.4rem;
        margin: 0 25px;
        letter-spacing: 0.025rem;
        font-size: 0.75rem;
        text-align: start;
    }

    .adjust-btn {
        background: #b08a43ef;
        position: relative;
        top: -20%;
        text-align: center !important;
        padding: 4px 10px;
        border-radius: 5px;
        border: transparent;
        width: 75px;
        font-size: 0.75rem;
    }

    .adjust-div {
        position: relative;
        top: -20%;
    }

    div>h1 {
        font-size: 1.65rem;
    }
}
</style>
