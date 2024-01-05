"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: ""
    };
  },
  onLoad(options) {
    this.msg = options;
    console.log(options);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.msg)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/pages/navTarget/navTarget.vue"]]);
wx.createPage(MiniProgramPage);
