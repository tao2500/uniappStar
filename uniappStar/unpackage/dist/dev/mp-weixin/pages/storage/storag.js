"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    setStorage(msg) {
      common_vendor.index.setStorage({
        key: "id",
        data: msg,
        success() {
          console.log("存储成功");
        }
      });
    },
    setStor(s) {
      common_vendor.index.setStorageSync("id", s);
    },
    asygetStorage() {
      common_vendor.index.getStorage({
        key: "id",
        success: (res) => {
          this.id = res.data;
        }
      });
    },
    getStorage() {
      const id = common_vendor.index.getStorageSync("id");
      this.id = id;
    },
    asyremoveStorage() {
      common_vendor.index.removeStorage({
        key: "id",
        success: function() {
          console.log("异步删除成功");
        }
      });
    },
    removeStorage() {
      common_vendor.index.removeStorageSync("id");
      console.log("同步删除成功");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.setStorage("异步存储的数据")),
    b: common_vendor.o(($event) => $options.setStor("同步存储的数据")),
    c: common_vendor.t($data.id),
    d: common_vendor.o(($event) => $options.asygetStorage()),
    e: common_vendor.o((...args) => $options.getStorage && $options.getStorage(...args)),
    f: common_vendor.o((...args) => $options.asyremoveStorage && $options.asyremoveStorage(...args)),
    g: common_vendor.o((...args) => $options.removeStorage && $options.removeStorage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/pages/storage/storag.vue"]]);
wx.createPage(MiniProgramPage);
