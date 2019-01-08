<!-- 大脑线条 -->
<template>
  <div class="dnContent">
    <dnPath /> <img src="../assets/dn.png" alt="dn" class="dnimg" />
  </div>
</template>

<script>
import dnPath from "./dnPath";
export default {
  data() {
    return {};
  },
  components: {
    dnPath
  },
  mounted() {}
};
</script>
<style lang="scss">
.dnContent {
  position: relative;
  .dnimg {
    width: 400px;
    height: 320px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    animation: flash 3s infinite;
    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
