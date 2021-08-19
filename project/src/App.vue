<template>
  <article>
    <Footer />
  </article>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
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
article {
  margin: 0 auto;
  text-align: center;
  font-family: Helvetica;
}
</style>
