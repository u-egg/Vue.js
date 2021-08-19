<template>
  <article>
    <section>
      <div class="top">
        <div class="nav">
          <div class="nav-img">
            <img class="logo" src="../assets/logo.png" />
          </div>
          <div class="nav-btn">
            <a href="#">
              <button class="login-btn">로그인</button>
            </a>
          </div>
        </div>
        <div class="top-body">
          <span class="big-font">
            영화, Tv 프로그램을<br />
            무제한으로.
          </span>
          <p class="mid-font">
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </p>
          <p class="small-font">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </p>
          <input type="text" placeholder="이메일 주소" />
          <a href="#"
            ><button class="email-btn">
              시작하기 &#62;
            </button>
          </a>
        </div>
      </div>
    </section>
    <section class="text-left">
      <div class="float-left">
        <p class="big-font-1">TV로 즐기세요.</p>
        <p class="mid-font">
          스마트 TV, PlayStation, Xbox, Chromecast, <br />
          Apple TV, 블루레이 플레이어 등 다양한<br />
          디바이스에서 시청하세요.
        </p>
      </div>
      <div class="float-right">
        <img class="img-assets" src="../assets/main-assets/main-tv.png" />
      </div>
      <div class="clear"></div>
    </section>
    <section class="text-left">
      <div class="float-right">
        <p class="big-font-1">
          즐겨 보는 콘텐츠를<br />
          저장해 오프라인으로<br />
          시청하세요.
        </p>
        <p class="mid-font">
          간편하게 저장하고 빈틈없이 즐겨보세요.
        </p>
      </div>
      <div class="float-left-position">
        <img class="img-assets" src="../assets/main-assets/main-mobile.jpg" />
        <div class="sub-img">
          <img class="sub-position" src="../assets/main-assets/sub.png" />
        </div>
      </div>
      <div class="clear"></div>
    </section>
    <section class="text-left">
      <div class="float-left">
        <p class="big-font-1">다양한 디바이스에서 <br />시청하세요.</p>
        <p class="mid-font">
          각종 영화와 TV 프로그램을 스마트폰, 태블릿,<br />
          노트북, TV에서 무제한으로 스트리밍하세요.<br />
          추가 요금이 전혀 없습니다.
        </p>
      </div>
      <div class="float-right">
        <img
          class="img-assets2"
          src="../assets/main-assets/main-computer.png"
        />
      </div>
      <div class="clear"></div>
    </section>
    <section class="text-left">
      <div class="float-right">
        <p class="big-font-1">
          어린이 전용 프로필을 <br />
          만들어 보세요.
        </p>
        <p class="mid-font">
          자기만의 공간에서 좋아하는 캐릭터와 즐기는<br />
          신나는 모험. 자녀에게 이 특별한 경험을<br />
          선물하세요. 넷플릭스 회원이라면 무료입니다.
        </p>
      </div>
      <div class="float-left-position">
        <img class="img-assets" src="../assets/main-assets/main-kids.png" />
      </div>
      <div class="clear"></div>
    </section>
    <section>
      <p class="big-font-1">
        자주 묻는 질문
      </p>
      <div>
        <ul>
          <li
            class="menu"
            @click="dropdown"
            v-for="(item, text) in litext"
            :key="text"
          >
            <a>{{ item.text }}</a>
            <ul class="hide">
              <li class="submenu" v-html="sublitext"></li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="small-font">
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>
      <input type="text" placeholder="이메일 주소" />
      <a href="#"
        ><button class="email-btn">
          시작하기 &#62;
        </button>
      </a>
    </section>
  </article>
</template>

<script>
import $ from "jquery";

export default {
  name: "index",
  data() {
    return {
      text: "",
      litext: [
        {
          text: "넷플릭스란 무엇인가요?",
        },
        {
          text: "넷플릭스 요금은 얼마인가요?",
        },
        {
          text: "어디에서 시청할 수 있나요?",
        },
        {
          text: "멤버십을 해지하려면 어떻게 하나요?",
        },
        {
          text: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
        },
        {
          text: "아이들이 넷플릭스를 봐도 좋을까요?",
        },
      ],

      sublitext:
        "넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화,<br />애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이가능한<br />수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.<br /><br />저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼<br />즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주<br />새로운 TV 프로그램과 영화가 제공됩니다.",
    };
  },
  methods: {
    dropdown() {
      $(document).ready(function() {
        $(".menu>a").click(function() {
          $(this)
            .next("ul")
            .toggleClass("hide");
        });
      });
    },
  },
};
</script>

<style scoped>
.menu a {
  cursor: pointer;
  margin: 0 auto;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 10px;
  font-size: 1.625rem;
  font-weight: 400;
  position: relative;
  display: block;
  text-align: left;
  background: #303030;
  max-width: 800px;
}

.menu .hide {
  display: none;
}

.submenu {
  margin: 0 auto;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  display: block;
  text-align: left;
  background: #303030;
  max-width: 800px;
  font-size: 1.625rem;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: left;
}

.li-main {
  margin: 0 auto;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  display: block;
  text-align: left;
  background: #303030;
  max-width: 800px;
}

.li-sub {
  overflow: hidden;
}

.top {
  width: 100%;
  height: 700px;
  text-align: center;
  position: relative;
  z-index: 1;
  border-bottom: 8px solid #222;
}

.top::after {
  width: 100%;
  height: 100%;
  content: "";
  background: url("../assets/main-assets/main-bg.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1;
}

.img-assets {
  width: 450px;
}

.img-assets2 {
  width: 450px;
  padding-top: 30px;
}
.sub-position {
  width: 350px;
  height: 100px;
  border-radius: 20px;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.float-left-position {
  float: left;
  position: relative;
}

.sub-img {
  position: absolute;
  width: 350px;
  height: 100px;
  border: 2px solid #555;
  border-radius: 15px;
  bottom: 0px;
  left: 45px;
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

.clear {
  clear: both;
}

.login-btn {
  background-color: #e50914;
  padding: 7px 17px;
  border-radius: 5px;
  border: 0;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
}

.text-left {
  text-align: left;
  border-bottom: 8px solid #222;
  padding: 5% 20%;
  max-width: 1100px;
  margin: 0 auto;
}

p {
  clear: both;
}

.big-font {
  font-size: 4rem;
  font-weight: bold;
}

.big-font-1 {
  font-size: 3.125rem;
  font-weight: bold;
}
.mid-font {
  font-size: 1.625rem;
  font-weight: 400;
}

.small-font {
  font-size: 1.2rem;
}

.top-body {
  margin-top: 150px;
}

input {
  padding: 10px 10px 0;
  min-width: 450px;
  height: 50px !important;
  font-size: 1.05rem;
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
</style>
