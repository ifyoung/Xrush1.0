<!-- 第六页 -->
<template>
  <div class="Xpage6">
    <Xfullpage>
      <section class="vcenter" :style="{ height: $windowHeigh + 'px' }">
        <div class="Xleft">
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <div
              class="greenText"
              v-show="Xpage6"
              style="animation-duration: 0.5s"
            >
              严控品质
            </div>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xtitle" v-show="Xpage6" style="animation-duration: 1s">
              做宝宝成长路上的<br />守护者。
            </p>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xdesc" v-show="Xpage6" style="animation-duration: 1.5s">
              通过FDA食品级硅胶认证，奶嘴专用材质，IPX高级防水保护，儿童使用更放心；德国红点至尊奖获奖团队倾力打造，承载研发团队爱子之心，颜值出众，有内涵更有温度。
            </p>
          </transition>
        </div>
        <div class="Xright"></div>
      </section>
      <!-- <svgicon name="test2" width="200" height="200"></svgicon> -->
    </Xfullpage>
  </div>
</template>

<script>
import Xfullpage from "../components/Xfullpage";
export default {
  data() {
    return {
      Xpage6: false
    };
  },

  components: {
    Xfullpage
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.Xpage6 = top >= this.$windowHeigh * 5 - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";

.Xpage6 {
  background: url("../assets/pic05.jpg") no-repeat;
  background-size: 100% 100%;

  .vcenter {
    padding: 0 7rem;
    display: grid;
    align-items: center;
    grid-template-columns: 60% 40%;
    flex-direction: column;
    text-align: left;
  }
  .Xtitle {
    width: auto;
    align-self: flex-end;
    color: $black;
  }
  .Xdesc {
    align-self: flex-start;
    color: $gray;
  }
}
</style>
