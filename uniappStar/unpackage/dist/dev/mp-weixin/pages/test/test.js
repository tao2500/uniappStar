"use strict";
const common_vendor = require("../../common/vendor.js");
const foot = () => "../myAssembly/foot2.js";
const _sfc_main = {
  components: { foot },
  data() {
    return {
      msg: "hello-uniapp",
      imgsrc: "../../static/logo.png",
      arr: [
        {
          name: "刘金涛",
          age: 22
        },
        {
          name: "真的帅",
          age: 18
        }
      ],
      imgarr: [],
      childMsg: ""
    };
  },
  methods: {
    clickme(area, e) {
      console.log("成功点击参数：" + area + " 事件对象：" + e);
    },
    chooseImg() {
      common_vendor.index.chooseImage({
        count: 9,
        success: (res) => {
          this.imgArr = res.tempFilePaths;
        }
      });
    },
    previewImg(current) {
      common_vendor.index.previewImage({
        current,
        urls: this.imgArr
      });
    },
    goText() {
      common_vendor.index.navigateTo({
        url: "/pages/navTarget/navTarget"
      });
    },
    goText2() {
      common_vendor.index.switchTab({
        url: "/pages/text/text"
      });
    },
    goText3() {
      common_vendor.index.redirectTo({
        url: "/pages/navTarget/navTarget"
      });
    },
    goText4() {
      common_vendor.index.navigateTo({
        url: "/pages/navTarget/navTarget?name=刘金涛"
      });
    },
    getMsg(res) {
      console.log("收到子组件传来信息：" + res);
      this.childMsg = res;
    }
  },
  onPullDownRefresh() {
    console.log("成功触发页面下拉刷新");
    common_vendor.index.stopPullDownRefresh();
  },
  onReachBottom() {
    console.log("页面触底了");
  }
};
if (!Array) {
  const _component_foot = common_vendor.resolveComponent("foot");
  _component_foot();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.msg),
    b: common_vendor.t("false"),
    c: common_vendor.t(1 + 1),
    d: $data.imgsrc,
    e: $data.imgsrc,
    f: common_vendor.f($data.arr, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name)
      };
    }),
    g: common_vendor.o(($event) => $options.clickme("参数", $event)),
    h: common_vendor.o((...args) => $options.chooseImg && $options.chooseImg(...args)),
    i: common_vendor.f(_ctx.imgArr, (item, k0, i0) => {
      return {
        a: item,
        b: common_vendor.o(($event) => $options.previewImg(item), _ctx.index)
      };
    }),
    j: _ctx.index,
    k: common_vendor.o((...args) => $options.goText && $options.goText(...args)),
    l: common_vendor.o((...args) => $options.goText2 && $options.goText2(...args)),
    m: common_vendor.o((...args) => $options.goText3 && $options.goText3(...args)),
    n: common_vendor.o((...args) => $options.goText4 && $options.goText4(...args)),
    o: common_vendor.o($options.getMsg),
    p: common_vendor.p({
      msg: $data.msg
    }),
    q: common_vendor.t($data.childMsg)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
