<template>
  <article>
    <img class="logo" src="../assets/logo.png" />
    <div class="layout">
      <p class="big-font2">넷플릭스를 시청할 프로필을 선택하세요</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
article {
  position: relative;
  border: 1px solid #000;
}
.logo {
  width: 100px;
  position: absolute;
  top: 20px;
  left: 50px;
}
.layout {
  border: 1px solid #fff;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 150px;
}

.big-font2 {
  font-size: 3.625rem;
  font-weight: 500;
}
</style>
