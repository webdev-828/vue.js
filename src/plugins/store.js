// This is the global variable store
// just use "this.$store.**variableName**" to add a global
// variable that is reactive with all components

// declare variables in the constructor
// for easy log and access to globals

export default class store {
  constructor() {
    // use this.$store.exampleVariable to access this reactive variable
    this.exampleVariable = "example string";

    this.apikey = '&apikey=1be55ddb';

    // at startup these 3 arrays are filled with 
    // data from the database.
    // check App.vue for how data from database 
    // is collected and stored
    this.movies = [];
    this.shows = [];
    // this.auditoriums = [];
  }
}
