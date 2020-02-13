<template>
  <div>
    <!-- <div v-for="day in this.showsList" v-bind:key="day.date">
        <div v-for="(show, index) in day.shows" v-bind:key="index">
            <div><h2>{{day.date}}</h2>
                <div><h3><em>{{show.time}}</em> {{show.film}} {{show.auditorium}}</h3></div>
            </div>
        </div>
    </div>
    
<table class="table table-hover table-dark col-4" id="test">
  <thead>
    <tr>
      <th scope="col">Datum</th>
      <th scope="col">Tid</th>
      <th scope="col">Film</th>
      <th scope="col">Salong</th>
    </tr>
  </thead>
  <tbody v-for="day in this.showsList" v-bind:key="day.date">
    <tr v-for="(show, index) in day.shows" v-bind:key="index">
      <th scope="row">{{day.date}}</th>
      <td>{{show.time}}</td>
      <td>{{show.film}} </td>
      <td>{{show.auditorium}}</td>
    </tr>
  </tbody>
</table> 

    -->
    <h3>VISNINGSTIDER</h3>
    <div id="accordion">
      <div v-for="(day, index)  in this.showsList" v-bind:key="day.date" class="card">
        <div class="card-header dark" :id="day.date">
          <h5 class="mb-0">
            <button
              class="btn btn-link dark"
              data-toggle="collapse"
              :data-target="'#box' + index"
              aria-expanded="true"
              :aria-controls="'box' + index"
            >{{day.date}}</button>
          </h5>
        </div>

        <div
          :id="'box' + index"
          v-bind:class="{ show: index === 0 }"
          class="collapse grey"
          :aria-labelledby="day.date"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div v-for="(show, index) in day.shows" v-bind:key="index"
            class="d-flex">
              <span class="sched-left mr-1">{{show.time}}</span>
              <div class="sched-right">
                Film: {{show.film}}
                <br>
                Salong: {{show.auditorium}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "showSchedule",
  data() {
    return {
      shows: this.$store.shows
    };
  },
  created() {
    // console.log(this.shows);

    // konstruerar en hash av shows, med ett array-element per datum
    this.showsHash = {};
    for (let show of this.shows) {
      if (!this.showsHash[show.date]) {
        this.showsHash[show.date] = [];
      }
      this.showsHash[show.date].push(show);
    }
    // console.log("showsHash", this.showsHash);

    // konverterar hashen eventsHash till en array som Vue gärna itererar
    this.showsList = [];
    for (let date in this.showsHash) {
      this.showsList.push({
        date: date,
        shows: this.showsHash[date]
      });
    }
    // console.log("showsList", this.showsList);
  }
};
</script>

<style scoped>
#accordion{
    max-height: 70vh;
    overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
#accordion::-webkit-scrollbar {
  display: none;
}
.sched-right {
  flex: 1;
}
.dark {
  background-color: rgb(48, 48, 48);
  color: white;
}
.grey {
  background-color: rgb(73, 73, 73);
}
</style>
