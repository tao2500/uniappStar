"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    console.log("页面生命周期  onLoad  监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）");
    console.log("API条件注释： 这是微信小程序");
  },
  onShow() {
    console.log("页面生命周期 onShow  监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面");
  },
  onReady() {
    console.log("页面生命周期 onReady  监听页面初次渲染完成。");
  },
  onHide() {
    console.log("页面生命周期 onHide  监听页面隐藏");
  },
  onUnload() {
    console.log("页面生命周期 onUnload  监听页面卸载");
  },
  methods: {
    // uni.request({
    //     url: 'http://localhost:1000/user/getAll',
    //     success(res) {
    // 		console.log(res)
    //         console.log('我成功发送了请求')
    //     }
    // 	// 取消请求
    // }).abort();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ASUS/Documents/HBuilderProjects/uniappStar/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
