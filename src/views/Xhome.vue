<!-- 主页 -->
<template>
  <div class="Xhome">
    <Xpage1 />
    <Xpage2 />
    <Xpage3 />
    <Xpage4 />
    <Xpage5 />
    <Xpage6 />
    <Xpage7 />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Xpage1 from "./Xpage1";
import Xpage2 from "./Xpage2";
import Xpage3 from "./Xpage3";
import Xpage4 from "./Xpage4";
import Xpage5 from "./Xpage5";
import Xpage6 from "./Xpage6";
import Xpage7 from "./Xpage7";

export default {
  data() {
    return {};
  },

  components: {
    Xpage1,
    Xpage2,
    Xpage3,
    Xpage4,
    Xpage5,
    Xpage6,
    Xpage7
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //进度条配置
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }
};
</script>
<style lang="scss">
@import "../styles/index.scss";
.Xhome {
  width: 100%;
  height: 100%;
}
</style>
