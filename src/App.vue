<template>
  <div id="app">
  	<!--seller 传递值-->
  	<v-header :seller='seller'></v-header>
  	<v-tabs :seller='seller'></v-tabs>
  	
    
  </div>
</template>

<script>
import header from './components/header'
import tabs from './components/tabs'

export default {
  name: 'app',
  	data(){//数据模块
			return {
				seller:Object
			}
		},		
		created(){//请求模块  比methods 快
			this.$http.get('/api/seller').then(res=> {
				//成功
				res=res.data//第二个data 是数据里的    第一个是vue-res里的
				console.log(res.data)
				if(res.errno==0){
					this.seller=res;
				}
			},function (res) {
				//失败
			})
		},
		components: {//注册模块
			'v-header':header,
			'v-tabs':tabs,
		
		}
}
</script>

<style>
	/*公共css*/
@import url("../static/css/common.css");
</style>
