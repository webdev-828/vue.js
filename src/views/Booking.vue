<template>
  <div class="booking">
    <div class="container-fluid">
      <h1
        v-show="!bookingComplete"
        class="row align-items-center booking-title text-center"
      >{{show.movie}}</h1>

      <h2 v-show="!bookingComplete" class="row booking-subtitle justify-content-center">
        <span class="col-sm-12 col-md-12 booking-subtitle-span mb-2">{{this.show.auditorium.name}}</span>
        <span class="col-sm-12 col-md-12 booking-subtitle-span mb-2">{{this.day.date}} kl {{this.show.time}}</span>
        <span class="col-sm-12 col-md-12 booking-subtitle-span mb-2"></span>
        
        <span class="col-sm-12 col-md-12 booking-subtitle-span">
        {{this.show.auditorium.seatsLeft}} av {{this.show.auditorium.maxSeats}} platser kvar</span>
      </h2>

      <div class="col-sm-12 col-12 row ">




      <!-- <img class="img-fluid booking-poster" v-bind:src="movie.posterURL"> -->
      <div v-show="!bookingComplete" class="booking-button-row col-12 row m-0 p-0 mb-1">
        <div class="col-sm-12 col-md-6 col text-right m-0 p-0">
        <span>Vuxna:</span>

        </div>
        <div class="col-sm-12 col-md-6 col text-left m-0 p-0">

        <a v-on:click="subtractAdult" class="ml-2">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en vuxen-biljett"
          >
        </a>
        
        <span class="ticket-number mr-2 ml-2">{{adultsnumber}}</span>
        
        <a v-on:click="addAdult" class="">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en vuxen-biljett"
          >
        </a>
        </div>
      </div>

      <div v-show="!bookingComplete" class="booking-button-row col-12 row m-0 p-0 mb-1">
                <div class="col-sm-12 col-md-6 col text-right m-0 p-0">
        <span class="">Pensionärer:</span>

                </div>

                        <div class="col-sm-6 col-md-6 col text-left m-0 p-0">

        <a v-on:click="subtractSenior" class="ml-2">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en pensionärs-biljett"
          >
        </a>
        
        <span class="ticket-number mr-2 ml-2">{{seniorsnumber}}</span>
        <a v-on:click="addSenior" class="">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en pensionärs-biljett"
          >
        </a>
                        </div>
        
      </div>

      <div v-show="!bookingComplete" class="booking-button-row mb-4 col-12 row m-0 p-0">
                <div class="col-sm-12 col-md-6 col text-right m-0 p-0">
        <span>Barn:</span>

                </div>
        <div class="col-sm-12 col-md-6 col text-left m-0 p-0">
        <a v-on:click="subtractChild" class="ml-2">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en pensionärs-biljett"
          >
        </a>
        
        <span class="ticket-number mr-2 ml-2">{{childnumber}}</span>
        <a v-on:click="addChild" class="">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en pensionärs-biljett"
          >
        </a>

        </div>
      </div>
      </div>
      <div
        v-show="!bookingComplete"
        class="booking-error"
        :class="{ hide: !this.subtractError }"
      >Du måste avvälja säten innan du kan ta bort biljetter</div>
      <div
        v-show="!bookingComplete"
        class="booking-warning"
        :class="{ hide: !this.maximumSeatsError }"
      >Du får inte boka fler än tio biljetter</div>

      <p class="mb-1" v-show="!bookingComplete">Antal biljetter: {{totalnumber}}.</p>
      <p class="mb-0" v-show="!bookingComplete">Summa: {{totalAmount}} kronor.</p>
      <div
        v-show="!bookingComplete"
        class="booking-error"
        :class="{ hide: !this.noTicketsAddedError }"
      >Välj antal biljetter innan du väljer säten</div>
      <div
        v-show="!bookingComplete"
        class="booking-error"
        :class="{ hide: !this.ticketsEqualToSeatsError }"
      >Lägg till fler biljetter för att kunna välja fler säten</div>

      <div v-show="!bookingComplete" class="row justify-content-center">
        <div id="screen" class></div>
      </div>

      <div v-show="!bookingComplete" id="seatsPlaceholder">
        <SeatsComponent
          :auditorium="this.show.auditorium.seats"
          :selectedTickets="totalnumber"
          @send-info="getInfo($event)"
          @error-message="showErrorMessage()"
        />
      </div>
      <div
        v-if="bookingCompleteError"
        class="booking-error"
      >Fel E-post</div>
      <div v-show="!bookingComplete" class="row justify-content-around mb-4">
        <div class="row justify-content-center">
          <input
            v-model="userEmail"
            type="email"
            class="form-control booking-button-row col-12"
            id="input-email"
            aria-describedby="emailHelp"
            placeholder="Skriv in din e-postadress"
          >
        </div>
      </div>

      <router-link to="/">
        <button
          v-show="!bookingComplete"
          class="col-5 col-md-3 btn btn-danger mr-5"
          id="cancel-button"
        >Avbryt</button>
      </router-link>
      <button
        v-show="!bookingComplete"
        v-on:click="bookingCompleted"
        class="col-5 col-md-3 btn btn-success"
        id="boka-button"
      >Boka</button>

      <div id="booking-verification" v-show="bookingComplete">
        <h3 class="brass-color">Bokning slutförd!</h3>
        <p>Du har bokat {{totalnumber}} biljetter till {{show.movie}} i {{this.show.auditorium.name}} klockan {{this.show.time}} {{this.day.date}}.</p>
        <p>En bokningsbekräftelse med all information har skickats till denna epost: {{this.userEmail}}</p>
        <p>Vi hoppas du uppskattar ditt besök på Grand.</p>
        <p>
          <strong>Välkommen åter!</strong>
        </p>
        <p>Bokningsnr: {{ bookNumber }}</p>
        <!-- seat numbers with rows -->
        <p v-for="seat in seatNumbers">Rad: {{ seat.row }}, Stol: {{ seat.seatNr }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { db } from "@/plugins/cloud";

import SeatsComponent from "@/components/SeatsComponent.vue";
export default {
  name: "booking",
  data() {
    return {
      date: "",
      dateIndex: 0,
      day: {},
      show: {},
      movie: {},
      seatNumbers: [],
      bookNumber: "",
      adultsnumber: 0,
      childnumber: 0,
      seniorsnumber: 0,
      totalnumber: 0,
      totalAmount: 0,
      userEmail: "",
      noTicketsAddedError: false,
      ticketsEqualToSeatsError: false,
      subtractError: false,
      maximumSeatsError: false,
      selectedSeats: [],
      bookingComplete: false,
      bookingCompleteError: false
    };
  },
  created() {
    // get date and the dates show from path param
    let link = location.pathname.replace("/book/", "");
    this.dateIndex = link.split("").pop();
    this.date = link.split("");
    this.date.pop();
    this.date = this.date.join("");

    this.day = this.$store.shows[this.date];
    this.show = this.day.shows[this.dateIndex];
  },
  components: {
    SeatsComponent
  }, //components
  methods: {
    showErrorMessage() {
      //om användaren ej har valt några biljetter alls
      if (!this.totalnumber) {
        this.noTicketsAddedError = true;
      }
      //om användaren valt lika många biljetter som säten
      else {
        this.ticketsEqualToSeatsError = true;
      }
    },
    getInfo(infoFromChild) {
      this.selectedSeats = infoFromChild.selectedSeats;
      this.ticketsEqualToSeatsError = infoFromChild.error;
      this.subtractError = infoFromChild.error;
    },
    updateShow() {
      // update show with current seats left and seats taken
      db.ref("visningar/" + this.date).set({
        date: this.day.date,
        shows: {
          0: {
            auditorium: this.day.shows[0].auditorium,
            time: "17:00",
            movie: this.day.shows[0].movie
          },
          1: {
            auditorium: this.day.shows[1].auditorium,
            time: "17:00",
            movie: this.day.shows[1].movie
          },
          2: {
            auditorium: this.day.shows[2].auditorium,
            time: "19:30",
            movie: this.day.shows[2].movie
          }
        }
      });
    }, //updateShow
     isEmailValid: function(userEmail) {
      return this.userEmail.match(
        /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
      );
    },//isEmailValid

    bookingCompleted() {
     if (this.totalnumber > 0 && this.totalnumber === this.selectedSeats.length && this.isEmailValid()){
        this.bookingCompleteError=false; 
        this.bookingComplete=true;
        this.booking() 
      }
      else {
        this.bookingCompleteError=true;
      }
    },
    booking() {
      //sätt de bokade värdena
      for (let seat of this.selectedSeats) {
        this.show.auditorium.seats[seat.row][seat.seatNr] = 1;
      }
      this.show.auditorium.seatsLeft -= this.selectedSeats.length;

      let bookingInfo = {
        email: this.userEmail,
        show: {
          showMovie: this.show.movie,
          showAuditorium: this.show.auditorium.name,
          showDate: this.day.date,
          showTime: this.show.time
        },
        tickets: {
          price: this.totalAmount,
          adult: this.adultsnumber,
          child: this.childnumber,
          senior: this.seniorsnumber
        }
      };

      let bookingNumber = db.ref("bookings").push(bookingInfo);
      this.bookNumber = bookingNumber.key;

      //skicka upp värdena till databasen
      this.updateShow();

      // send the user the receipt
      this.sendReceipt(bookingNumber.key);
    },
    sendReceipt(bookingNumber) {
      for (let seat of this.selectedSeats) {
        let seatNumber = 0;
        for (let i = 0; i < seat.row; i++) {
          seatNumber += this.show.auditorium.seats[i].length;
        }
        seatNumber += seat.seatNr + 1;
        this.seatNumbers.push({
          row: seat.row + 1,
          seatNr: seatNumber
        });
        console.log(this.seatNumbers);

        this.bookingComplete = true;
      }
    },
    subtractAdult() {
      //om valda biljetter är mer än valda säten
      if (this.totalnumber > this.selectedSeats.length) {
        if (this.adultsnumber > 0 && this.totalnumber > 0) {
          if (this.totalnumber === 10) {
            this.maximumSeatsError = false;
          }
          this.adultsnumber--;
          this.subtractToTotalNumber();
        }
      }
      //om valda biljetter är desamma som valda säten och mer än 0
      else if (
        this.totalnumber === this.selectedSeats.length &&
        this.totalnumber > 0
      ) {
        this.subtractError = true;
      }
    },
    addAdult() {
      if (this.adultsnumber < 10 && this.totalnumber < 10) {
        this.adultsnumber++;
        this.addToTotalNumber();
      } else {
        this.maximumSeatsError = true;
      }
    },
    subtractSenior() {
      //om valda biljetter är mer än valda säten
      if (this.totalnumber > this.selectedSeats.length) {
        if (this.seniorsnumber > 0 && this.totalnumber > 0) {
          if (this.totalnumber === 10) {
            this.maximumSeatsError = false;
          }
          this.seniorsnumber--;
          this.subtractToTotalNumber();
        }
      }
      //om valda biljetter är desamma som valda säten och mer än 0
      else if (
        this.totalnumber === this.selectedSeats.length &&
        this.totalnumber > 0
      ) {
        this.subtractError = true;
      }
    },
    addSenior() {
      if (this.seniorsnumber < 10 && this.totalnumber < 10) {
        this.seniorsnumber++;
        this.addToTotalNumber();
      } else {
        this.maximumSeatsError = true;
      }
    },
    subtractChild() {
      //om valda biljetter är mer än valda säten
      if (this.totalnumber > this.selectedSeats.length) {
        if (this.childnumber > 0 && this.totalnumber > 0) {
          if (this.totalnumber === 10) {
            this.maximumSeatsError = false;
          }
          this.childnumber--;
          this.subtractToTotalNumber();
        }
      }
      //om valda biljetter är desamma som valda säten och mer än 0
      else if (
        this.totalnumber === this.selectedSeats.length &&
        this.totalnumber > 0
      ) {
        this.subtractError = true;
      }
    },
    addChild() {
      if (this.childnumber < 10 && this.totalnumber < 10) {
        this.childnumber++;
        this.addToTotalNumber();
      } else {
        this.maximumSeatsError = true;
      }
    },
    addToTotalNumber() {
      this.noTicketsAddedError = false;
      this.ticketsEqualToSeatsError = false;
      this.subtractError = false;

      if (this.totalnumber < 10) {
        this.totalnumber++;
        this.calculatePrice();
      }
    },
    subtractToTotalNumber() {
      this.totalnumber--;
      this.calculatePrice();
    },
    calculatePrice() {
      this.totalAmount = 0;
      this.totalAmount += this.seniorsnumber * 80;
      this.totalAmount += this.adultsnumber * 100;
      this.totalAmount += this.childnumber * 60;
    }
  }
};
</script>


<style scoped>
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
  font-family: "Montserrat", sans-serif;
}

.hide {
  display: none;
}

a {
  color: inherit;
}

a:visited {
  color: inherit;
}

a:hover {
  font-style: none;
}
.brass-color {
  color: var(--special-element-color);
}

.booking-title {
  text-align: center;
  justify-content: space-around;
  font-size: 2em;
  align-content: flex-start;
  margin-top: 45px;
  margin-bottom: 15px;
  font-weight: 600;
}
.booking-subtitle {
  justify-content: center;
  justify-items: center;
  font-size: 1.2em;
  margin-bottom: 30px;
  font-weight: 100;
}
.booking-subtitle-span {
  font-size: 0.8em;
  font-weight: 400;
}

.booking-button-row {
  margin-bottom: 10px;
  height: 20px;
}

.add-subtract-button {
  height: 19px;
  width: auto;
  margin: 0;
  justify-self: center;
}

.booking-error {
  color: crimson;
  font-weight: 400;
  font-size: 0.8em;
  margin: 10px;
}
.booking-warning {
  color: orangered;
  font-weight: 400;
  font-size: 0.8em;
  margin: 10px;
}

.ticket-number {
  font-weight: 400;
  height: 19px;

  color: var(--main-element-color);
  margin: 0;
}
.seat {
  background-color: var(--main-element-color);
}
.seat:hover {
  background-color: var(--special-element-color);
}
.seat-blocked {
  background-color: rgb(107, 5, 5);
}
.seat-selected {
  background-color: var(--special-element-color);
}

#booking-verification {
  margin-top: 20vh;
  margin-bottom: 10vh;
}

#boka-button {
}
#cancel-button {
}
#screen {
  margin-top: 30px;
  margin-bottom: 0;
  width: 50%;
  height: 5px;
  background-color: var(--special-element-color);
  border-top-color: var(--main-element-color);
  border-radius: 10px;
}
#input-email {
  height: 35px;
  margin: 0;
}

#seatsPlaceholder {
  margin-top: -40px;
  margin-bottom: -40px;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
  object-fit: contain;
  justify-content: center;
  align-content: center;
}

@media only screen and (min-width: 600px) {
  #seatsPlaceholder {
    margin-top: -75px;
    margin-bottom: -75px;
  }
}
</style>
