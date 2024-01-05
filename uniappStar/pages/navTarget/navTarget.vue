<template>
	<p>这里是navigator的目标页</p>
	<p>收到上一页面参数：{{msg}}</p>
</template>

<script>
	export default {
		data () {
			return {
				msg: ''
			}
		},
	    onLoad (options) {
			this.msg = options
	       console.log(options)
	    }
	}
</script>

<style>
</style>