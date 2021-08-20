<template>
  <article>
    <a href="/">
      <img class="logo" src="../assets/logo.png" />
    </a>
    <div class="layout">
      <p class="big-font2">넷플릭스를 시청할 프로필을 선택하세요</p>
      <section v-for="(item, index) in profile" :key="index">
        <a href="/main">
          <img class="profileimg" :src="item.img" />
        </a>
        <p class="profile-font">{{ item.name }}</p>
        <button @click="del(index)">&times;</button>
      </section>
      <section></section>
    </div>
  </article>
</template>

<script>
import { pullAt } from "lodash";

export default {
  name: "addUser",
  data() {
    return {
      img: "",
      name: "",
      profile: [
        {
          name: "홍길동",
          img: "https://placeimg.com/100/100/tech",
        },
        {
          name: "김철수",
          img: "https://placeimg.com/200/200/tech",
        },
        {
          name: "유리",
          img: "https://placeimg.com/150/150/tech",
        },
        {
          name: "스미스",
          img: "https://placeimg.com/200/150/tech",
        },
        {
          name: "Vue.js",
          img: "https://placeimg.com/200/180/tech",
        },
      ],
    };
  },
  methods: {
    del(index) {
      console.log(index);
      pullAt(this.profile, [index]);
    },
  },
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

.profile-font {
  font-size: 1.325rem;
}
.profileimg {
  height: 200px;
  width: 200px;
  border-radius: 5px;
}
.layout {
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 150px;
}

.big-font2 {
  font-size: 3.625rem;
  font-weight: 500;
}

section {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 0 10px;
}

button {
  border: 0;
  background-color: #000;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
