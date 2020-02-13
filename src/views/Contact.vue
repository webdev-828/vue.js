<template>
  <div class="container row m-0 p-0">
    <div class="col-12" id="modal" v-if="showFail">
      <div id="div" v-on:click="close">
        <p class="p-1" id="fail">{{ message }}</p>
        <div>
          <img
            class="wondering"
            src="http://www.freepngclipart.com/thumb/thinking/32424-kids-thinking-images-hd-photo-thumb.png"
          >
        </div>
        <div class="p-1 ml-5">
          <img id="exitt" src="http://cdn.onlinewebfonts.com/svg/img_517388.png">
        </div>
      </div>
    </div>
    <div class="col-12" id="modal" v-if="showModal">
      <div id="div" v-on:click="close">
        <h3 id="thanks">Tack!</h3>
        <div
          class="p-1"
          id="message"
        >Din åsikt betyder jättemycket för oss, och vi vill att du ska vära nöjd. Vi återkommer med ett svar inom ett par dagar.</div>
        <div>
          <img
            class="signature"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Celentano_signature.png"
          >
        </div>
        <div id="Walter">Walter Christmas, direktör</div>
        <div class="p-1">
          <img id="exit" src="http://cdn.onlinewebfonts.com/svg/img_517388.png">
        </div>
      </div>
    </div>

    <h1 class="col-12 hide-on-desktop align-self-center mb-0">Kontakt</h1>
    <div class="col-sm-12 col-md-6">
      <h3 class="col-12" id="opinion">Åsikter? Kontakta oss!</h3>
      <div>
        <div class="form-group">
          <label for="mail">E-post</label>
          <input
            v-model="mail"
            type="email"
            class="form-control"
            id="mail"
            aria-describedby="emailHelp"
            placeholder="Din e-post..."
          >
        </div>
        <div class="form-group">
          <label for="opinion">Ditt meddelande</label>
          <textarea
            type="text"
            class="form-control"
            id="opinion"
            v-model="opinion"
            placeholder="Meddelande..."
          ></textarea>
        </div>
        <div class="form-check"></div>
        <button id="submit" v-on:click="submitModal" type="button" class="btn btn-primary">Skicka</button>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div id="all">
        <div id="main">
          <table>
            <tr>
              <th id="info">Öppettider</th>
            </tr>
            <tr>
              <td>Måndag: 15:00-22:00</td>
            </tr>
            <tr>
              <td>Lördag: 13:00-22:00</td>
            </tr>
            <tr>
              <td>Söndag: 14:00-22:00</td>
            </tr>
          </table>
          <table>
            <tr>
              <th id="info">Telefon</th>
            </tr>
            <tr>
              <td>040 - 56 26 00 00</td>
            </tr>
          </table>
          <table>
            <tr>
              <th id="info">E-post</th>
            </tr>
            <tr>
              <td>support@grand.se</td>
            </tr>
          </table>
          <table>
            <tr>
              <th id="info">Adress</th>
            </tr>
            <tr>
              <td>Fina gatan 4, Malmö</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      name: null,
      mail: "",
      opinion: "",
      showModal: false,
      showFail: false,
      message: ""
    };
  },
  methods: {
    isEmailValid: function(mail) {
      return this.mail.match(
        /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
      );
    },
    submitModal: function(event) {
      if (
        this.mail.length > 4 &&
        this.opinion.length > 4 &&
        this.isEmailValid()
      ) {
        this.showModal = true;
      } else if (this.mail.length < 5 || !this.isEmailValid()) {
        this.showFail = true;
        this.message =
          "Vänta lite! Någonting är fel. Har du skrivit din e-post korrekt?";
      } else if (this.opinion.length < 5) {
        this.showFail = true;
        this.message =
          "Du måste skriva lite mer så vi förstår dig bättre. Försök igen!";
      }
    },
    close: function(event) {
      this.showModal = false;
      this.showFail = false;
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: none !important;
  box-shadow: none;
}

h3 {
  float: left;
}

#all {
  display: flex;
  flex-direction: column;
}

#main {
  display: flex;
  flex-direction: column;
  float: left;
}

table {
  float: left;
  margin-top: 2vh;
}

#info {
  margin-top: 1vh;
  font-size: 3vh;
}

.form {
  text-align: center;
}

#opinion {
  margin-top: 2vh;
}

#div {
  justify-content: center;
  display: flex;
  background: rgb(255, 255, 255);
  width: 50vw;
  height: 40vh;
  position: fixed;
  z-index: 9;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

#modal {
  justify-content: center;
  display: flex;
  align-self: center;
}

#thanks {
  font-weight: bold;
  position: absolute;
  color: #36454f;
  margin-top: 1vh;
  margin-bottom: 1vh;
  text-decoration: underline;
  text-decoration-color: #b08a43;
}

.wondering {
  height: 27vh;
  width: 13vw;
  position: absolute;
  top: 12vh;
  left: 5vw;
  object-fit: cover;
}

#submit {
  background: #b08a43;
  border: #b08a43;
}

#message {
  position: absolute;
  top: 60px;
}

.signature {
  height: 9vh;
  width: 8vw;
  position: absolute;
  top: 24vh;
  left: 4vw;
  -o-object-fit: cover;
  object-fit: cover;
}

#Walter {
  position: absolute;
  top: 35vh;
  left: 1vw;
}

#fail {
  font-size: 3vh;
  font-weight: bold;
  margin-top: 2vh;
}

#exitt {
  height: 4vh;
  width: 2vw;
  position: relative;
  bottom: 0.5vh;
}

#exit {
  height: 4vh;
  width: 2vw;
  position: relative;
  left: 24vw;
  bottom: 0.5vh;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.hide-on-desktop {
  display: none;
}

@media screen and (max-width: 700px) {
  .signature {
    display: none;
  }

  .hide-on-desktop {
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .hide-on-desktop {
    display: block;
  }

  #div {
    width: 100%;
    left: 0;
  }

  #modal {
    justify-content: center;
    max-width: 50vw;
  }

  .wondering {
    height: 25vh;
    width: 32vw;
    left: 0vw;
    top: 13vh;
  }

  #exitt {
    height: 2vh;
    width: 3vw;
  }

  #exit {
    height: 2vh;
    width: 3vw;
    left: 48vw;
  }
}

@media only screen and (min-width: 500px) and (max-width: 1030px) {
  .wondering {
    display: none;
  }

  .signature {
    display: none;
  }
}
</style>
