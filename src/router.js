import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/",
      name: "Xhome",
      component: () => import("./views/Xhome.vue"),
      meta: {
        progress: {
          func: [
            { call: "color", modifier: "temp", argument: "#ffb000" },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: { speed: "1.5s", opacity: "0.6s", termination: 400 }
            }
          ]
        }
      }
    }
  ]
});
