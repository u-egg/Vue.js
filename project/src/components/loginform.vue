<template>
  <article>
    <div class="login-frame">
      <div class="login-frame-1">
        <p class="font">로그인</p>
        <from>
          <!--form 수정 필요-->
          <input
            type="text"
            id="id"
            placeholder="  이메일 주소 또는 전화번호"
          />
          <input type="password" id="pw" placeholder="  비밀번호" />
          <a href="/profile">
            <button>로그인</button>
          </a>
        </from>
        <p class="text-1">
          Netflix 회원이 아닌가요?
          <a href="/join"><span class="white">지금 가입하세요</span>.</a>
        </p>
        <p class="text-2">
          이 페이지는 Google reCAPTCHA의 보호를 받아<br />
          사용자가 로봇이 아님을 확인합니다.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "loginform",
  data() {
    return {};
  },
};
</script>

<style scoped>
.white {
  color: white;
}
.text-1 {
  margin-top: 50px;
}

.text-2 {
  font-size: 0.825rem;
  text-align: left;
}
.login-frame {
  margin: 0 auto;
  background-color: #000;
  opacity: 1;
  width: 420px;
  border-radius: 4px;
  height: 550px;
  padding: 20px 0 30px;
}

.login-frame-1 {
  margin: 40px auto;
  width: 300px;
}

.font {
  text-align: left;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
}

input {
  margin: 0 auto;
  margin-bottom: 20px;
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 20px;
  line-height: 20px;
  padding: 16px 0;
  font-size: 1rem;
  width: 100%;
}

button {
  margin: 0 auto;
  border: 0;
  color: #fff;
  background: #e50914;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 0.925rem;
  font-weight: 600;
}

p {
  color: #737373;
}
</style>
