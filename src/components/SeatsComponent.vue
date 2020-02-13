<template>
  <div id="auditorium-seats">
    <div v-for="(row, index) in auditorium" :key="row + index">
      <div v-for="(seat, seatNr) in auditorium[index]" :key="seatNr*seatNr">
        <Seat
          :row="index"
          :seatNr="seatNr"
          :booked="seat"
          @click-seat="selectSeat($event)"
          @error-message="showErrorMessage()"
          @un-select-seat="unSelectSeat($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Seat from "@/components/Seat.vue";
export default {
  name: "seatsComponent",
  data() {
    return {
      ticketsEqualToSeatsError: false,
      selectedSeats: []
    };
  }, //data

  props: {
    auditorium: Array,
    selectedTickets: Number
  }, //props

  methods: {
    selectSeat(seatInfo) {
      if (!seatInfo.selected) {
        //om sätet redan är klickat (förbokat)
        this.unSelectSeat(seatInfo);
      } else {
        //add the selected seat to our array
        this.selectedSeats.push(seatInfo);
        this.sendInfo();
      }
    }, //selectSeat

    unSelectSeat(seatInfo) {
      //här vet vi att sätet var förbokat och ska nu ta bort det
      //ta bort felmeddelandet om det finns utskrivet
      this.sendInfo();

      //ta bort aktuellt säte från arrayen (om det finns i arrayen)
      for (let i = 0; i < this.selectedSeats.length; i++) {
        if (
          this.selectedSeats[i].seatNr === seatInfo.seatNr &&
          this.selectedSeats[i].row === seatInfo.row
        ) {
          this.selectedSeats.splice(i, 1);
          this.sendInfo();
        }
      }
    }, //unSelectSeat

    sendInfo() {
      let info = {
        selectedSeats: this.selectedSeats,
        error: false
      };
      this.$emit("send-info", info);
    },

    showErrorMessage() {
      // visa felmeddelande
      this.$emit("error-message");
    }
  }, //methods

  components: {
    Seat
  } //components
}; //export default
</script>

<style scoped>
#auditorium-seats {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  width: 100%;
  height: 100%;
}
#auditorium-seats > div {
  display: inline-block;
}
</style>
