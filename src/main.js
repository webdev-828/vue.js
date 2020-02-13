import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "@/plugins/store";
import { db } from "@/plugins/cloud";

// this creates an object to store variables in
// it loads the store into the Vue object
// which every component is a child of
Vue.$store = new Store();
Vue.prototype.$store = Vue.$store;

// global eventBus to handle data transfer
// between sibling components
export const eventBus = new Vue();

Vue.config.productionTip = false;

// calls database to get the data
db.ref("visningar").on("value", getData, errData);

// callback when getting data
function getData(data) {
  let gotJSON = data.val();

  Vue.$store.shows = gotJSON;
}

// this function gets called once when page loads
// and only after all data has been loaded
function loadShows(data) {
  let gotJSON = data.val();

  Vue.$store.shows = gotJSON;

  console.log(Vue.$store.shows);

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}

function errData(err) {
  console.log(err);
}

let movielist = [
  {
    Title: "Fantastic+Beasts-+The+Crimes+of+Grindelwald",
    Trailer: "8bYBOVWLNIs",
    PictureBackground: 'https://cdn.vox-cdn.com/thumbor/suKFTxyDNYPnGXtid_VSoE2S9yU=/0x0:1777x999/1200x800/filters:focal(747x358:1031x642)/cdn.vox-cdn.com/uploads/chorus_image/image/62347473/beasts.0.jpg'
  },
  {
    Title: "Glass",
    Trailer: "95ghQs5AmNk",
    PictureBackground: 'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzEyXFxcLzI4MTcxNDM3XFxcL0dsYXNzLmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2VcXFwvbm8taW1hZ2UucG5nP3Y9NlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIzYTkxZTI5MzQwODM0ODk2NGMyNmQxZDliYmU3NDU5ODY1Mjc5ZmQ2In0=/glass.jpg'
  },
  {
    Title: "Hunter+Killer",
    Trailer: "QAhcDHRZOak",
    PictureBackground: 'https://pmcvariety.files.wordpress.com/2018/09/hk_03117.jpg?w=1000'
  },
  {
    Title: "The+Grinch",
    Trailer: "Bf6D-i8YpHg",
    PictureBackground: 'https://i.ytimg.com/vi/QLz-pfgun_A/maxresdefault.jpg'
  },
  {
    Title: "A+Star+Is+Born",
    Trailer: "nSbzyEJ8X9E",
    PictureBackground: 'https://pmcvariety.files.wordpress.com/2018/09/a-star-is-born-3.jpg?w=1000'
  },
  {
    Title: "Bohemian+Rhapsody",
    Trailer: "mP0VHJYFOAU",
    PictureBackground: 'https://cdn.theatlantic.com/assets/media/img/mt/2018/10/bohem/lead_720_405.jpg?mod=1541014069'
  },
  {
    Title: "Lego+movie+2",
    Trailer: "11K013qpRR4",
    PictureBackground: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-lego-movie-2-song.jpg'
  },
  {
    Title: "Ralph+Breaks+the+Internet",
    Trailer: "_BcYBFC6zfY",
    PictureBackground: 'https://cdn.vox-cdn.com/thumbor/8W6HOuk_g6ZVioMUUeNXbZl1w2k=/0x0:2000x1000/1200x675/filters:focal(840x340:1160x660)/cdn.vox-cdn.com/uploads/chorus_image/image/62380145/Ralph_Breaks_the_Internet_Movie_Review.0.jpg'
  },
  {
    Title: "Aquaman",
    Trailer: "WDkg3h8PCVU",
    PictureBackground: 'https://www.slashfilm.com/wp/wp-content/images/aquaman-ticket-sales.jpg'
  },
  {
    Title: "A+Dog's+Way+Home",
    Trailer: "1pKdCHvH310",
    PictureBackground: 'https://pmcvariety.files.wordpress.com/2019/01/a-dogs-way-home.jpg?w=1000&h=563&crop=1'
  },
  {
    Title: "Bumblebee",
    Trailer: "lcwmDAYt22k",
    PictureBackground: 'https://cdn3.movieweb.com/i/article/c9PkaRIPEFw3xJlGRMzyA7f2QQDttP/798:50/Bumblebee-Movie-Poster.jpg'
  },
  {
    Title: "On+the+Basis+of+Sex",
    Trailer: "28dHbIR_NB4",
    PictureBackground: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2018/07/On-the-Basis-of-Sex-poster-with-Felicity-Jones.jpg'
  },
  {
    Title: "Mary+Poppins+Returns",
    Trailer: "-3jsfXDZLIY",
    PictureBackground: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2018/11/Emily-Blunt-in-Mary-Poppins-Returns-poster.jpg'
  },
  {
    Title: "Escape+room&y=2018",
    Trailer: "6dSKUoV0SNI",
    PictureBackground: 'https://ewedit.files.wordpress.com/2018/10/escaperoom.jpg'
  },
  {
    Title: "Vice&y=2018",
    Trailer: "jO3GsRQO0dM",
    PictureBackground: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/62723667/vicecover.0.jpg'
  },
  {
    Title: "Spider-Man%3A+Into+the+Spider-Verse",
    Trailer: "g4Hbz2jLxvQ",
    PictureBackground: 'https://images.indianexpress.com/2018/12/spider-man-into-the-spider-verse-759.jpg'
  }
];

// checks if every database call is complete
// before starting vue
let movieCounter = 0;
let loadOnce = true;

// loops all movie titles to get each movie from omdb api
for (let query of movielist) {
  fetch("https://www.omdbapi.com/?t=" + query.Title + Vue.$store.apikey)
    .then(res => {
      return res.json();
    })
    .then(res => {
      movieCounter++;

      res.Link = query.Title;
      res.Trailer = query.Trailer;
      res.PictureBackground = query.PictureBackground;
      Vue.$store.movies.push(res);

      // starts Vue after collecting all data from api
      if (loadOnce && movieCounter === Vue.$store.movies.length) {
        loadOnce = false;
        // after loading movies from omdb
        // we call shows from firebase
        // and after that we initiate Vue
        db.ref("visningar").once("value", loadShows, errData);
      }
    });
}

console.log(Vue.$store.movies);
