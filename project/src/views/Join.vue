<template>
  <body>
    <Nav />
    <joinform />
    <Footer_white />
  </body>
</template>

<script>
import Footer_white from "../components/Footer_white.vue";
import Nav from "../components/nav.vue";
import joinform from "../components/joinform.vue";

export default {
  name: "Join",
  components: { Footer_white, Nav, joinform },
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  background-color: #fff;
}
</style>
