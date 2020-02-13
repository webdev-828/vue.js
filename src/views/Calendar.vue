<template>
  <div class="row m-0 d-flex justify-content-around">
    <Calendar class="col-12 col-md-5 col-lg-3" v-on:showDay="clickDate($event)"/>
    <CalendarShows v-bind:clickedDate="newDate" id="calendar-shows" class="col-12 col-sm-12 col-md-6 col-lg-5 mt-4"/>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import CalendarShows from "@/components/CalendarShows";
export default {
  data() {
    return {
      newDate: ""
    };
  },
  components: {
    Calendar,
    CalendarShows
  },
  methods: {
    clickDate(date) {
      this.newDate = date;
    }
  }
  
};
</script>

<style>
</style>
