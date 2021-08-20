<template>
  <article>
    <p class="small-font">
      시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
      입력하세요.
    </p>
    <form action="/join">
      <input type="email" placeholder="이메일 주소" v-model="email" />
      <button class="email-btn">
        시작하기 &#62;
      </button>
    </form>
  </article>
</template>

<script>
export default {
  name: "email",
  data() {
    return {};
  },
};
</script>

<style scoped>
article {
  margin-bottom: 50px;
}
.email-btn {
  font-size: 1.625rem;
  font-weight: 400;
  min-height: 63px;
  width: 200px;
  color: #fff;
  background-color: #ed0914;
  border: 0;
  cursor: pointer;
}

input {
  padding: 10px 10px 0;
  min-width: 450px;
  height: 50px !important;
  font-size: 1.05rem;
}

.small-font {
  font-size: 1.2rem;
}
</style>
