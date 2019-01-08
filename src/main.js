import Vue from "vue";
//进度条
import VueProgressBar from "vue-progressbar";
import App from "./App.vue";
import router from "./router";
var VueScrollTo = require("vue-scrollto");
// 滚动
Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
//动效
require("vue2-animate/dist/vue2-animate.min.css");
//进度条配置
const options = {
  color: "#29CB6D",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false
};

Vue.use(VueProgressBar, options);

Vue.config.productionTip = false;
//屏幕宽高
Vue.prototype.$windowHeigh = document.documentElement.clientHeight;
Vue.prototype.$windowWidth = document.documentElement.clientWidth;
if (Vue.prototype.$windowWidth < 500) {
  Vue.prototype.$windowHeigh = 700;
}
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
