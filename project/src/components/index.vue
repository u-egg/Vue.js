<template>
  <article>
    <section>
      <div class="top">
        <div class="nav">
          <div class="nav-img">
            <img class="logo" src="../assets/logo.png" />
          </div>
          <div class="nav-btn">
            <button class="login-btn">로그인</button>
          </div>
        </div>
        <p>
          영화, Tv 프로그램을<br />
          무제한으로.
        </p>
        <p>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </p>
        <p>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </p>
        <input type="text" /><button>시작하기</button>
      </div>
    </section>
    <section>2번</section>
    <section>3번</section>
    <section>4번</section>
    <section>5번</section>
    <section>6번</section>
  </article>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.top::after {
  width: 100%;
  height: 100%;
  content: "";
  background: url("../assets/main-assets/main-bg.jpg");
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;
}

.nav {
  padding: 40px;
  margin: 0 auto;
  max-width: 1920px;
}

.nav-btn {
  float: right;
}

.nav-img {
  float: left;
}
.logo {
  width: 200px;
}

.login-btn {
  background-color: #e50914;
  padding: 7px 17px;
  border-radius: 5px;
  border: 0;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
}

p {
  clear: both;
}
</style>
