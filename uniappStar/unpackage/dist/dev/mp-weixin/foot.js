"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  props: ["msg"],
  data() {
    return {
      date: "2023-10-02"
    };
  },
  methods: {
    sendMsg() {
      this.$emit("myEvent", this.date);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.msg),
    b: common_vendor.o((...args) => $options.sendMsg && $options.sendMsg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/pages/myAssembly/foot.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
