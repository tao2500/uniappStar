<template>
	<view>
		{{msg}}
		<hr />
		{{false ? 'true' : 'false'}}
		{{1 + 1}}

		<hr />
		<image v-bind:src="imgsrc" mode="center"></image>
		<image :src="imgsrc" mode="center"></image>


		<hr />
		<block v-for="item of arr">
			{{item.name}}
		</block>

		<hr />
		<button @click="clickme('参数', $event)">点我</button>

		<hr />
		上传图片：
		<view>
			<button @click="chooseImg" type="primary">上传图片</button>
		</view>
		<view>
			<image v-for="item in imgArr" :src="item" :key="index" @click="previewImg(item)"></image>
		</view>
		
		<br/>
		<hr/>
		uniapp中的导航转跳：
		<navigator url="/pages/navTarget/navTarget" hover-class="navigator-hover">
		  <button type="default">跳转到目标页面</button>
		</navigator>
		<navigator url="/pages/text/text" open-type="switchTab">
		  <button type="default">跳转到text页面</button>
		</navigator>
		<button @click="goText">navigateTo转跳(不能转跳到选项卡页面)</button>
		<button @click="goText2">switchTab转跳(不能转跳到普通页面)</button>
		<button @click="goText3">redirectTo(关闭当前页面转跳,不能转跳选项卡)</button>
		<button @click="goText4">传参转跳</button>
		
		
		
		
		<br/>
		<hr/>
		<foot :msg="msg" @myEvent="getMsg"></foot>
		<p>收到子组件传来信息：{{childMsg}}</p>
	</view>
</template>

<script>
	import foot from "../myAssembly/foot.vue"
	
	export default {
		components: {foot},
		data() {
			return {
				msg: 'hello-uniapp',
				imgsrc: '../../static/logo.png',
				arr: [{
						name: '刘金涛',
						age: 22
					},
					{
						name: '真的帅',
						age: 18
					}
				],
				imgarr: [],
				childMsg: '',
			}
		},
		methods: {
			clickme(area, e) {
				console.log("成功点击" + "参数：" + area + " 事件对象：" + e);
			},
			chooseImg() {
				uni.chooseImage({
					count: 9,
					success: res => {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			previewImg(current) {
				uni.previewImage({
					current,
					urls: this.imgArr
				})
			},
			goText () {
			  uni.navigateTo({
			    url: '/pages/navTarget/navTarget',
			  })
			},
			goText2 () {
			  uni.switchTab({
			    url: '/pages/text/text'
			  })
			},
			goText3 () {
				uni.redirectTo({
			        url: '/pages/navTarget/navTarget'
				})
			},
			goText4 () {
				uni.navigateTo({
				    url: '/pages/navTarget/navTarget?name=刘金涛'
				});
			},
			getMsg (res) {
				console.log("收到子组件传来信息：" + res);
				this.childMsg = res
			},
		},
		onPullDownRefresh() {
			console.log("成功触发页面下拉刷新");
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			console.log("页面触底了");
		}
	}
</script>

<style>
</style>