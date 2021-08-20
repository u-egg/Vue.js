<template>
  <article>
    <div class="nav">
      <div class="nav-img">
        <a href="/">
          <img class="logo" src="../assets/logo.png" />
        </a>
      </div>
      <div class="nav-btn">
        <a href="/login">
          <h3>로그인</h3>
        </a>
      </div>
    </div>
    <div class="clear"></div>
  </article>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>

<style scoped>
article {
  background-color: white;
}
.nav {
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1920px;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}

.nav-btn {
  float: right;
}

.nav-img {
  float: left;
}
.logo {
  width: 170px;
}
</style>
