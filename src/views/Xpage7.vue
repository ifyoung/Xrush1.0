<!-- 第七页 -->
<template>
  <div class="Xpage7">
    <Xfullpage>
      <section class="vcenter" :style="{ height: $windowHeigh + 'px' }">
        <div class="Xsvg">
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.1s"
            >
              <img
                src="../assets/SVG/数据采集.svg"
                alt="数据采集"
                class="svg_img"
              />
              <p class="svg_text">数据采集</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.3s"
            >
              <img
                src="../assets/SVG/传感技术.svg"
                alt="传感技术"
                class="svg_img"
              />
              <p class="svg_text">传感技术</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.4s"
            >
              <img
                src="../assets/SVG/卡通外观.svg"
                alt="卡通外观"
                class="svg_img"
              />
              <p class="svg_text">卡通外观</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.5s"
            >
              <img
                src="../assets/SVG/专业教程.svg"
                alt="专业教程"
                class="svg_img"
              />
              <p class="svg_text">专业教程</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.6s"
            >
              <img
                src="../assets/SVG/实时交互.svg"
                alt="实时交互"
                class="svg_img"
              />
              <p class="svg_text">实时交互</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.7s"
            >
              <img
                src="../assets/SVG/亲子互动.svg"
                alt="亲子互动"
                class="svg_img"
              />
              <p class="svg_text">亲子互动</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.8s"
            >
              <img
                src="../assets/SVG/数据报告.svg"
                alt="数据报告"
                class="svg_img"
              />
              <p class="svg_text">数据报告</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 0.9s"
            >
              <img
                src="../assets/SVG/习惯矫正.svg"
                alt="习惯矫正"
                class="svg_img"
              />
              <p class="svg_text">习惯矫正</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.0"
            >
              <img
                src="../assets/SVG/千万级数据量.svg"
                alt="千万级数据量"
                class="svg_img"
              />
              <p class="svg_text">千万级数据量</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.1s"
            >
              <img
                src="../assets/SVG/轨迹监测.svg"
                alt="轨迹监测"
                class="svg_img"
              />
              <p class="svg_text">轨迹监测</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.2s"
            >
              <img
                src="../assets/SVG/游戏激励.svg"
                alt="游戏激励"
                class="svg_img"
              />
              <p class="svg_text">游戏激励</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.3s"
            >
              <img src="../assets/SVG/22g.svg" alt="22g" class="svg_img" />
              <p class="svg_text">仅重22g</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.4s"
            >
              <img src="../assets/SVG/防水.svg" alt="防水" class="svg_img" />
              <p class="svg_text">IPX高级防水</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.5s"
            >
              <img
                src="../assets/SVG/食品级材质.svg"
                alt="食品级材质"
                class="svg_img"
              />
              <p class="svg_text">食品级材质</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.6s"
            >
              <img
                src="../assets/SVG/顶尖团队.svg"
                alt="顶尖团队"
                class="svg_img"
              />
              <p class="svg_text">顶尖团队</p>
            </div>
          </transition>
          <transition name="zoom">
            <div
              class="svg_content"
              v-show="Xpage7"
              style="animation-duration: 1.7s"
            >
              <img
                src="../assets/SVG/人体工学.svg"
                alt="人体工学"
                class="svg_img"
              />
              <p class="svg_text">人体工学</p>
            </div>
          </transition>
        </div>
        <Xfoot />
      </section>
    </Xfullpage>
  </div>
</template>

<script>
import Xfullpage from "../components/Xfullpage";
import Xfoot from "../components/Xfoot";

export default {
  data() {
    return {
      Xpage7: false
    };
  },

  components: {
    Xfullpage,
    Xfoot
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.Xpage7 = top >= this.$windowHeigh * 6 - this.$windowHeigh / 5;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";

.Xpage7 {
  .vcenter {
    display: grid;
    align-items: center;
    grid-template-rows: 60% 40%;
    text-align: left;
    background-color: $light_gray;
    .Xsvg {
      height: 80%;
      padding: 0 6rem;
      display: grid;
      grid-template-rows: 50% 50%;
      grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
      align-items: center;
      text-align: center;
      .svg_content {
        .svg_img {
          width: 50%;
        }
        .svg_text {
          font-size: 1.4rem;
          color: $black;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
