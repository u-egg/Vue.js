<template>
  <article>
    <div class="top"></div>
    <div class="screen">
      <video
        class="mainvedio"
        src="../assets/mainvedio.mp4"
        loop
        autoplay
      ></video>
      <div class="screentext">
        <img class="screenlogo" src="../assets/screenlogo.webp" />
        <p class="screen-font">
          이번생은 망했다고 생각한 순간 기회가 찾아왔다. 이혼직전, 열여덟살로
          돌아간 홍대영. 지금부턴 무능한 남편대신 꿈 많은 소년으로 살아가련다.
          18년 전 그때처럼.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "mainbody",
};
</script>

<style scoped>
.top {
  height: 80px;
}

.mainvedio {
  width: 100vw;
  height: 85vh;
  object-fit: cover;
}

.screen {
  position: relative;
}

.screentext {
  position: absolute;
  bottom: 120px;
  left: 80px;
  width: 580px;
  text-align: left;
}

.screenlogo {
  width: 550px;
}

.screen-font {
  font-size: 1.5rem;
}
</style>
