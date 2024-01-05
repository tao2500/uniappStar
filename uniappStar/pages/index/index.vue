<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<br />
		<a href="https://developer.aliyun.com/article/1043799#slide-0">学习笔记</a>

		<hr />
		条件注释实现跨端兼容测试：
		<br />
		<!-- #ifdef H5 -->
		<view>
			h5页面会显示
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP -->
		<view>
			小程序会显示
		</view>
		<!-- #endif -->

		<!-- #ifdef MP-WEIXIN -->
		<view>
			微信小程序会显示
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS -->
		<view>
			app会显示
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-QQ -->
		<view>
			QQ小程序会显示
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log('页面生命周期  onLoad  监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）');
			//#ifdef MP-WEIXIN
			  console.log('API条件注释： 这是微信小程序')
			//#endif
			    
			//#ifdef H5
			console.log('API条件注释： 这是h5页面')
			//#endif
		},
		onShow() {
			console.log('页面生命周期 onShow  监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面');
		},
		onReady() {
			console.log('页面生命周期 onReady  监听页面初次渲染完成。');
		},
		onHide() {
			console.log('页面生命周期 onHide  监听页面隐藏');
		},
		onUnload() {
			console.log('页面生命周期 onUnload  监听页面卸载');
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
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* 样式条件注释 */
	/* #ifdef H5 */
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	/* #endif */

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>