<!-- 第三页 -->
<template>
  <div class="Xpage3">
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
              v-show="Xpage3"
              style="animation-duration: 0.5s"
            >
              革新突破
            </div>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xtitle" v-show="Xpage3" style="animation-duration: 1s">
              不止是定义，<br />更是颠覆。
            </p>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xdesc" v-show="Xpage3" style="animation-duration: 1.5s">
              传统方式与AI科技的奇妙结合，智能升级儿童刷牙过程；基于文字、语言、图像、音乐、颜色、音频和视频等多模态话语相互作用，建立沉浸式刷牙环境，打造前所未有的刷牙体验，轻松养成正确刷牙习惯。亲近传统，却又带来未来。Xrush用全新定义为您提供儿童刷牙解决方案。
            </p>
          </transition>
        </div>
        <div class="Xright"><Xdn v-if="Xpage3" /></div>
      </section>
    </Xfullpage>
  </div>
</template>

<script>
import Xfullpage from "../components/Xfullpage";
import Xdn from "../components/Xdn";

export default {
  data() {
    return {
      Xpage3: false
    };
  },

  components: {
    Xfullpage,
    Xdn
  },
  mounted() {
    //this不用箭头函数指向错误
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.Xpage3 = top >= this.$windowHeigh * 2 - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";

.Xpage3 {
  background: url("../assets/pic02.jpg") no-repeat;
  background-size: 100% 100%;
  .vcenter {
    padding-left: 7rem;
    padding-right: 5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 60% 40%;
    flex-direction: column;
    text-align: left;
    .Xleft {
      z-index: 2;
    }
    .Xright {
      width: 100%;
      height: 17rem;
      position: relative;
      text-align: center;
      justify-self: center;
    }
  }

  .Xtitle {
    width: auto;
    align-self: flex-end;
    color: $white;
  }
  .Xdesc {
    align-self: flex-start;
    padding-right: 10%;
  }
}
</style>
