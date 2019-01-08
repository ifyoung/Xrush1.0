<!-- 第四页 -->
<template>
  <div class="Xpage4">
    <Xfullpage>
      <section class="vcenter" :style="{ height: $windowHeigh + 'px' }">
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <div
            class="greenText"
            v-show="Xpage4"
            style="animation-duration: 0.5s"
          >
            出类拔萃
          </div>
        </transition>
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <p class="Xtitle" v-show="Xpage4" style="animation-duration: 1s">
            寓教于乐，<br v-if="this.$windowWidth < 1000" />专业有效又充满乐趣。
          </p>
        </transition>
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <p class="Xdesc" v-show="Xpage4" style="animation-duration: 1.5s">
            依据中华口腔医学会推荐的圆弧刷牙法，自主研发的专业儿童刷牙动画教程，别具一格的跟刷模式，引导儿童科学刷牙；启动游戏化教学模式，源源不断的鼓励，激发儿童探索世界的好奇；亲子互动，告别枯燥，让儿童在欢声笑语中爱上刷牙，养成终生刷牙习惯；口腔知识科普，一站式解答您关心的口腔问题。
          </p>
        </transition>
        <transition
          name="fade"
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown"
        >
          <img
            src="../assets/Xrush_xiyi.gif"
            alt="Xrush_xiyi"
            v-show="Xpage4"
            style="animation-duration: 1.5s"
            class="xiyi_gif"
          />
        </transition>
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
      Xpage4: false
    };
  },

  components: {
    Xfullpage
  },
  mounted() {
    //this不用箭头函数指向错误
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.Xpage4 = top >= this.$windowHeigh * 3 - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";
.Xpage4 {
  background: url("../assets/pic03.jpg") no-repeat;
  background-size: 100% 100%;

  .vcenter {
    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    grid-template-rows: 10% 10% 30% 50%;
    padding: 4rem 0;
    .greenText {
      justify-self: center;
    }
    .Xtitle {
      color: $black;
    }
    .Xdesc {
      align-self: flex-start;
      padding: 0 16rem;
      color: $gray;
    }
    .xiyi_gif {
      margin: 0 auto;
      width: 40%;
    }
  }
}
</style>
