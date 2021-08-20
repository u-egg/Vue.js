<template>
  <article>
    <div class="form">
      <form>
        <p class="p-bold">
          회원님, 반갑습니다.<br />
          넷플릭스 가입 절차는 간단합니다.
        </p>
        <p class="p-mid">
          비밀번호를 입력하시면 바로 시청하실 수 있습니다.
          <br />
          <br />
        </p>
        <p>
          이메일주소
          <br />
          여기에 DB 이메일 주소 받아오기. readonly
          <br />
        </p>
        <p>
          <input type="password" id="pw" placeholder="비밀번호를 입력하세요" />
        </p>
        <button>다음</button>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  name: "joinform",
};
</script>

<style scoped>
article {
  color: #333;
}

.form {
  margin: 50px auto;
  width: 400px;
  height: 500px;
  text-align: left;
}

.p-bold {
  font-size: 1.425rem;
  font-weight: 700;
}

.p-mid {
  font-size: 1.1rem;
}

button {
  min-height: 48px;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 2px;
  border: 0;
  width: 400px;
  color: white;
  cursor: pointer;
  background-color: #e50914;
  margin-top: 50px;
}

input {
  width: 392px;
  font-size: 1rem;
  min-height: 48px;
}
</style>
