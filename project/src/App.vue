<template>
  <body>
    <article>
      <index />
    </article>
    <Footer />
  </body>
</template>

<script>
import Footer from "./components/Footer.vue";
import index from "./components/index.vue";

export default {
  name: "App",
  components: {
    Footer,
    index,
  },
};
</script>

<style>
@font-face {
  font-family: "Helvetica";
  src: url("./assets/font/Helvetica.woff2") format("woff2"),
    url("./assets/font/Helvetica.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  margin: 0px auto !important;
  padding: 0px !important;
  background-color: #000;
  font-family: Helvetica;
  color: #fff;
  width: 100vw;
  height: 100vh;
}

article {
  margin: 0 auto;
  text-align: center;
}
</style>
