<template>
  <body>
    <mainnav />
    <mainbody />
    <slide :text="this.text1" :img="this.img1" />
    <slide :text="this.text5" :img="this.img5" />
    <slidebig :text="this.text4" :img="this.img4" />
    <slide :text="this.text2" :img="this.img2" />
    <slide :text="this.text3" :img="this.img3" />

    <Footer />
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import mainnav from "../components/mainnav.vue";
import mainbody from "../components/mainbody.vue";
import slide from "../components/slide.vue";
import slidebig from "../components/slidebig.vue";

export default {
  name: "Main",
  components: { Footer, mainnav, mainbody, slide, slidebig },
  data() {
    return {
      text1: "영화",
      text2: "애니메이션",
      text3: "드라마",
      text4: "오직 넷플릭스에서",
      text5: "코미디",
      img1: "https://placeimg.com/100/100/tech",
      img2: "https://placeimg.com/200/100/tech",
      img3: "https://placeimg.com/300/100/tech",
      img4: "https://placeimg.com/450/450/tech",
      img5: "https://placeimg.com/500/450/tech",
    };
  },
  methods: {},
};
</script>

<style></style>
