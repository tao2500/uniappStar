<template>
	<p>我是foot组件（自定义组件myAssembly）</p>
	<p>父组件传给子组件的信息：{{msg}}</p>
	<button type="primary" @click="sendMsg">给父组件传值</button>
</template>

<script>
	export default {
		props: ['msg'],
		data () {
			return {
				date: '2023-10-02'
			}
		},
		methods: {
			sendMsg () {
		        this.$emit('myEvent',this.date)
			}
		}
	}
</script>

<style>
</style>