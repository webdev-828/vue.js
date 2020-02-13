<template>
  <footer id="footer">
    <div class="footerFlex">
      <p>
        <i class="fas fa-phone"></i>
        <a href="tel:04056260000">040 - 56 26 00 00</a>
      </p>
      <p>© 2019
        <span class="home-title">GRAND</span>
      </p>
      <p>Fina gatan 8, 214 63 Malmö</p>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
footer {
  height: 50px;
  width: 100%;
  padding-top: 8px;
  background-color: #36454f;
}
p {
  font-size: 1em;
  color: whitesmoke;
  flex: 1;
}

.fa-phone {
  color: whitesmoke;
}

.footerFlex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a {
  color: whitesmoke;
}
@media screen and (max-width: 700px) {
  .footerFlex > p {
    display: none;
  }
}
</style>
