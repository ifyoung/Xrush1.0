<!-- 头部 -->
<template>
  <header class="Xheader" :class="{ XheaderShadow: isTop }">
    <div class="Xheader-content">
      <img src="@/assets/logo.png" alt="Xrush" class="Xlogo" />
      <!-- <button type="button" class="Xbuy" v-scroll-to="'.Xfoot'">购买</button> -->
      <button type="button" class="Xbuy" @click="buyXrush">申请试用</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isTop: false
    };
  },
  mounted() {
    //this不用箭头函数指向错误
    document.onmousewheel = () => {
      this.isTop = document.documentElement.scrollTop !== 0;
    };
  },
  methods: {
    buyXrush() {
      window.open(
        "http://cmajor.cirbd.cn/pages/Paper/questionnaire.html?c_major_myq_id=383"
      );
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";
.Xheader {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: $white;
  z-index: 100;
  .Xheader-content {
    width: 80%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    .Xlogo {
      width: 4rem;
    }
    .Xbuy {
      width: 5rem;
      height: 2rem;
      background-color: $blue;
      justify-self: flex-end;
    }
  }
}
.XheaderShadow {
  box-shadow: 0 0 5px $deep_gray;
}
</style>
