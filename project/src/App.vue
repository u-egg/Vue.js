<template>
  <body>
    <router-view />
  </body>
</template>

<script>
export default {
  name: "App",
  components: {},
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

.float-right {
  float: right;
}

.float-left {
  float: left;
}
.mid-font {
  font-size: 1.625rem;
  font-weight: 400;
}

.small-font {
  font-size: 1.2rem;
}

.big-font {
  font-size: 4rem;
  font-weight: bold;
}

.clear {
  clear: both;
}

a:link {
  color: red;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
