<template>
	<view>
	  <!-- 长按文本是否可选 -->
	  <text selectable='true'>我嫩爹</text>
	</view>
	
	<view>
	  <!-- 显示连续空格的方式 -->
	  <view>
	    <text space='ensp'>我   嫩爹</text>
	  </view>
	  <view>
	    <text space='emsp'>我   嫩爹</text>
	  </view>
	  <view>
	    <text space='nbsp'>我   嫩爹</text>
	  </view>
	</view>
	
	<view>
	  <text>skyblue</text>
	</view>
	
	<view>
	  <!-- 是否解码 -->
	  <text decode='true'>&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;</text>
	</view>
	
	<br/>
	view组件属性测试：
	<view class="box2" hover-class="box2_active">
		外层view
	  <view class='box1' hover-class='active' hover-stop-propagation hover-start-time=200 hover-stay-time=2000>
		  内层view
	  </view>
	</view>
	
	<br/>
	buttom组件属性测试：
	<button size='mini' type='primary'>前端</button>
	<button size='mini' type='default' disabled='true'>前端</button>
	<button size='mini' type='warn' loading='true'>前端</button>
	<button size="default">默认按钮独占一行</button>
	
	<br/>
	image组件属性测试： 组件默认宽度 300px、高度 225px；
	<br/>
	<image src="../../static/logo.png" mode="heightFix" width="100rpx"></image>
	
	<hr/>
	rpx即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。
	<br/>
	使用@import语句可以导入外联样式表, 在 uni-app 中不能使用 * 选择器。
	
</template>

<script>
</script>

<style>
	.box1{
		background-color: cadetblue;
	}
	.active {
		background-color: red;
	}
	.box2{
		background-color: beige;
	}
	.box2_active{
		background-color: black;
	}
</style>