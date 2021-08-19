<template>
  <body>
    <index />
    <Footer />
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import index from "../components/index.vue";

export default {
  name: "Home",
  components: {
    Footer,
    index,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
