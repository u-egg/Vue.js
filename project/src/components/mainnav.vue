<template>
  <article>
    <div class="nav">
      <div class="nav-img">
        <a href="/">
          <img class="logo" src="../assets/logo.png" />
        </a>
      </div>
      <div class="list">
        <ul>
          <li>
            홈
          </li>
          <li>
            TV 프로그램
          </li>
          <li>
            영화
          </li>
          <li>
            New! 요즘 대세 콘텐츠
          </li>
          <li>
            내가 찜한 콘텐츠
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </article>
</template>

<script>
export default {
  name: "mainnav",
  data() {
    return {};
  },
};
</script>

<style scoped>
article {
  background-color: #222;
}
.nav {
  padding: 0 40px;
  margin: 0 auto;
  width: 100vw;
  height: 50px;
  padding-top: 20px;
  padding-bottom: 10px;
  position: fixed;
  z-index: 2;
  background-color: #000;
}

.list {
  float: left;
}
.nav-btn {
  float: right;
}

.nav-img {
  float: left;
}
.logo {
  width: 130px;
}

ul,
li {
  display: inline-block;
}

li {
  margin-left: 30px;
}
</style>
