<!-- 第二页 -->
<template>
  <div class="Xpage2">
    <Xfullpage>
      <section class="vcenter" :style="{ height: $windowHeigh + 'px' }">
        <div class="Xleft">
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xtitle" v-show="Xpage2" style="animation-duration: 0.5s">
              记录刷牙瞬间，<br />见证成长微笑。
            </p>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xdesc" v-show="Xpage2" style="animation-duration: 1s">
              全新智能硬件Xrush，重新定义儿童刷牙，结合APP构建有效的游戏化教学模式，使宝宝刷牙过程变得轻松愉快。
            </p>
          </transition>
        </div>
      </section>
      <!-- <svgicon name="test" width="200" height="200"></svgicon> -->
    </Xfullpage>
  </div>
</template>

<script>
import Xfullpage from "../components/Xfullpage";
export default {
  data() {
    return {
      Xpage2: false
    };
  },

  components: {
    Xfullpage
  },
  mounted() {
    //this不用箭头函数指向错误,当滚动到指定位置显示动画
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.Xpage2 = top >= this.$windowHeigh - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
.Xpage2 {
  background: url("../assets/pic01.jpg") no-repeat fixed center;
  background-size: 100% 130%;
  .Xfullpage {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .vcenter {
    display: grid;
    flex-direction: column;
    grid-template-columns: 50% 50%;
    text-align: left;
    padding: 0 7rem;
    .Xleft {
      padding-top: 20%;
      align-self: center;
    }
  }
}
</style>
