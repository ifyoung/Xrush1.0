<!-- 第一页 -->
<template>
  <div class="Xpage1">
    <Xfullpage>
      <Xhead />
      <div class="show3D" @click="show3D = !show3D">
        <img src="../assets/3D.png" alt="查看3D模型" width="80%" />
      </div>
      <div
        class="Xrush_content"
        :style="{ height: $windowHeigh + 'px' }"
        v-if="!show3D"
      >
        <img src="../assets/xrush.png" alt="Xrush" class="Xrush_png" />
      </div>
      <Xmodel v-if="show3D" />
      <div class="next_page" v-scroll-to="'.Xpage2'" v-if="show3D">
        <img src="../assets/Scroll.png" alt="下一页" width="50px" />
      </div>
    </Xfullpage>
  </div>
</template>

<script>
import Xhead from "../components/Xhead";
import Xmodel from "../components/Xmodel";
import Xfullpage from "../components/Xfullpage";
export default {
  data() {
    return {
      show3D: false
    };
  },

  components: {
    Xhead,
    Xmodel,
    Xfullpage
  }
};
</script>
<style lang="scss">
.Xpage1 {
  background-color: #fbfbfb;
  text-align: center;
  position: relative;
  .Xrush_content {
    width: 100%;
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .Xrush_png {
      width: 100%;
      margin: auto;
    }
  }
  .show3D {
    position: absolute;
    right: 10%;
    top: 15%;
    cursor: pointer;
  }
  .next_page {
    width: 100%;
    position: absolute;
    bottom: 0;
    cursor: pointer;

    animation: jump 4s infinite;
    @keyframes jump {
      0% {
        bottom: 100px;
      }
      25% {
        bottom: 150px;
      }
      50% {
        bottom: 100px;
        opacity: 0.5;
      }
      75% {
        bottom: 150px;
      }
      100% {
        bottom: 100px;
      }
    }
  }
}
</style>
