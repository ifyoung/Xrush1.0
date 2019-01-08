module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  // //公共样式
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/styles/index.scss";
  //       `
  //     }
  //   }
  // }
  devServer: {
    disableHostCheck: true
  }
};
