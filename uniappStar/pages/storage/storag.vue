<template>
	<view>
	    <button type="primary" @click="setStorage('异步存储的数据')">异步存储数据</button>
	</view>
	
	<view>
	    <button type="primary" @click="setStor('同步存储的数据')">同步存储数据</button>
	</view>
	{{id}}
	<view>
	    <button type="primary" @click="asygetStorage()">异步获取数据</button>
	</view>
	
	<view>
	    <button type="primary" @click="getStorage">同步获取数据</button>
	</view>
	
	<view>
	    <button type="primary" @click="asyremoveStorage">异步删除数据</button>
	</view>
	
	<view>
	    <button type="primary" @click="removeStorage">同步删除数据</button>
	</view>
</template>

<script>
	export default {
		data () {
		    return {
				id: ''
		    }
		},
	    methods: {
	        setStorage (msg) {
				uni.setStorage({
				    key: 'id',
				    data: msg,
				    success () {
				        console.log('存储成功')
				    }
				})
	        },
			setStor (s) {
			    uni.setStorageSync('id',s)
			},
			asygetStorage () {
			    uni.getStorage({
			        key: 'id',
			        success:  res=>{
						this.id = res.data
			        }
			    })
			},
			getStorage () {
			    const id = uni.getStorageSync('id')
				this.id = id
			    // console.log(id)
			},
			asyremoveStorage () {
			    uni.removeStorage({
			        key: 'id',
			        success: function () {
			            console.log('异步删除成功')
			        }
			    })
			},
			removeStorage () {
		        uni.removeStorageSync('id')
				console.log('同步删除成功')
			}
	    }
	}
</script>

<style>
</style>