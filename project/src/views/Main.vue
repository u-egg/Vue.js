<template>
  <body>
    <mainnav />
    <mainbody />
    <slide />
    <Footer />
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import mainnav from "../components/mainnav.vue";
import mainbody from "../components/mainbody.vue";
import slide from "../components/slide.vue";

export default {
  name: "Main",
  components: { Footer, mainnav, mainbody, slide },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
