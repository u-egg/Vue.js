<template>
  <article>
    <div id="footer-top"></div>
    <p class="title">
      {{ qustion }}
    </p>
    <div>
      <ui>
        <li v-for="(item, text) in footerList" :key="text">
          {{ item.text }}
        </li>
      </ui>
    </div>
    <div>
      <select name="lang">
        <option value="ko">한국어</option>
        <option value="en">영어</option>
      </select>
    </div>
    <div>
      <p class="title-text">
        {{ titletext }}
      </p>
    </div>
    <div class="footer-text">
      <p>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 080-001-9587<br />
        대표: 레지널드 숀 톰프슨<br />
        이메일 주소: korea@netflix.com<br />
        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
        우편번호 03161<br />
        사업자등록번호: 165-87-00119<br />
        클라우드 호스팅: Amazon Web Services Inc.<br />
        공정거래위원회 웹사이트
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      qustion: "질문이 있으신가요? 문의 전화: 080-001-9587",
      titletext: "넷플릭스 대한민국",
      text: "",
      footerList: [
        {
          text: "자주 묻는 질문",
        },
        {
          text: "고객 센터",
        },
        {
          text: "계정",
        },
        {
          text: "미디어 센터",
        },
        {
          text: "투자 정보(IR)",
        },
        {
          text: "입사 정보",
        },
        {
          text: "넷플릭스 지원 디바이스",
        },
        {
          text: "이용 약관",
        },
        {
          text: "개인정보",
        },
        {
          text: "쿠키 설정",
        },
        {
          text: "회사 정보",
        },
        {
          text: "문의하기",
        },
        {
          text: "속도 테스트",
        },
        {
          text: "법적 고지",
        },
        {
          text: "오직 넷플릭스에서",
        },
        {
          text: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
article {
  color: #757575;
  text-align: left;
  width: 900px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  font-size: 0.8em;
}

select {
  width: 130px;
  height: 40px;
  border: 1px solid #757575;
  background-color: #222;
  color: #757575;
  padding-left: 35px;
  margin: 30px 0;
}

#footer-top {
  height: 50px;
}
.title {
  font-size: 1em;
  letter-spacing: 0.1em;
}

.title-text {
  font-size: 0.8em;
}
.footer-text {
  font-size: 0.7em;
  padding-bottom: 30px;
}
</style>
