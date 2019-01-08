<!-- 第五页 -->
<template>
  <div class="Xpage5">
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
              v-show="Xpage5"
              style="animation-duration: 0.5s"
            >
              全面发力
            </div>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xtitle" v-show="Xpage5" style="animation-duration: 1s">
              全方位追踪<br />刷牙活动。
            </p>
          </transition>
          <transition
            name="fade"
            enter-active-class="fadeInUp"
            leave-active-class="fadeOutDown"
          >
            <p class="Xdesc" v-show="Xpage5" style="animation-duration: 1.5s">
              引入动作捕捉技术，千万级数据量支撑，多轴陀螺仪重构动作模型，绘制儿童刷牙轨迹，击穿“假装刷牙”的表象；可视化结果反馈，矫正错误姿势，学会正确刷牙方式，维护儿童口腔健康。
            </p>
          </transition>
        </div>
        <div class="Xright">
          <img
            src="../assets/daily_data .gif"
            alt="刷牙详情"
            class="daily_data"
            width="75%"
          />
        </div>
      </section>
    </Xfullpage>
  </div>
</template>

<script>
import Xfullpage from "../components/Xfullpage";
export default {
  data() {
    return {
      Xpage5: false
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
      this.Xpage5 = top >= this.$windowHeigh * 4 - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";

.Xpage5 {
  background: url("../assets/pic04.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .vcenter {
    padding: 0 7rem;
    display: grid;
    align-items: center;
    grid-template-columns: 60% 40%;
    flex-direction: column;
    text-align: left;
    .Xright {
      position: relative;
      align-self: flex-end;
      .daily_data {
        position: relative;
        left: 15%;
        bottom: -65px;
        transform: rotate(15deg);
      }
    }
  }
  .Xtitle {
    width: auto;
    align-self: flex-end;
    color: $white;
  }
  .Xdesc {
    align-self: flex-start;
  }
}
</style>
