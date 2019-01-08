<!-- 一块板面，高度等于屏幕高度 -->
<template>
  <div class="Xfullpage" :style="{ minHeight: $windowHeigh + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Xfullpage",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.Xfullpage {
  width: 100%;
  overflow: hidden;
  &:after {
    clear: both;
  }
}
</style>
