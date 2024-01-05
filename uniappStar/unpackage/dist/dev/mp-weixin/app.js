"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/test/test.js";
  "./pages/index/index.js";
  "./pages/text/text.js";
  "./pages/storage/storag.js";
  "./pages/navTarget/navTarget.js";
  "./pages/myAssembly/foot.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("uniApp生命周期 onLaunch  当uni-app 初始化完成时触发（全局只触发一次）");
  },
  onShow: function() {
    console.log("uniApp onShow  当 uni-app 启动，或从后台进入前台显示");
  },
  onHide: function() {
    console.log("uniApp onHide  当 uni-app 从前台进入后台");
  },
  onError: function() {
    console.log("uniApp onError  当 uni-app 报错时触发");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
