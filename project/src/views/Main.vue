<template>
  <body>
    <mainnav />
    <mainbody />
    <Footer />
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import mainnav from "../components/mainnav.vue";
import mainbody from "../components/mainbody.vue";

export default {
  name: "Main",
  components: { Footer, mainnav, mainbody },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
