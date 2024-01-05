<script>
	export default {
		onLaunch: function() {
			console.log('uniApp生命周期 onLaunch  当uni-app 初始化完成时触发（全局只触发一次）')
		},
		onShow: function() {
			console.log('uniApp onShow  当 uni-app 启动，或从后台进入前台显示')
		},
		onHide: function() {
			console.log('uniApp onHide  当 uni-app 从前台进入后台')
		},
		onError: function() {
			console.log('uniApp onError  当 uni-app 报错时触发');
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
