<template>
  <body>
    <div class="top">
      <div class="nav">
        <div class="nav-img">
          <a href="/">
            <img class="logo" src="../assets/logo.png" />
          </a>
        </div>
      </div>
      <div class="clear"></div>
      <loginform />
    </div>
    <Footer />
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import loginform from "../components/loginform.vue";

export default {
  components: { loginform, Footer },
  name: "Login",
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 90vh;
  text-align: center;
  position: relative;
  z-index: 1;
}

.top::after {
  width: 100%;
  height: 100%;
  content: "";
  background: url("../assets/main-assets/main-bg.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1;
}

.nav-img {
  float: left;
}
.logo {
  width: 200px;
}
.nav {
  padding: 40px;
  margin: 0 auto;
  max-width: 1920px;
}

.clear {
  clear: both;
}
</style>
