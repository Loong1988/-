<template>
	<div>
		<p>a组件:{{a}}</p>
		<!--<p>zi:{{zi}}</p>-->
		<button @click="send()">send</button>
		<button @click="send2()">sendBB</button>
	</div>
</template>

<script>
	import bus from '../../../static/js/bus.js'
	export default {
		data() { //原始数据
			return {
				a: 'zinew',
				zi: this.abc
			}
		},
		props: { //传递参数  
			abc: ''
		},
		computed: { //计算属性
		},
		components: { //注册模块               
		},
		created() { //请求模块  比methods 快        

		},
		mounted() { //比created慢  el 加载完毕
		},
		methods: { //方法
			send() {
				let f = 1 + 2
				let sd = 1
				console.log('aa')
				this.$emit("bmsg", this.a);
				//this.zi='9'
				if (f == 1) {
					console.log(0)
				} else {
					console.log(2)
				}
			},
			send2() {
				console.log('22')
				bus.$emit('getTarget', '向b发送的信息');
			}
		}
	}
</script>

<style>

</style>