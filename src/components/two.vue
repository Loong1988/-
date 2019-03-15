<template>
<div>
	{{fu}}
	
	<button @click="fu_method">父级按钮</button>
	<vzi :par.sync='fu' @childfn="fu_zi_method">
		<h1 slot='header'>
			<header>111</header>
			<footer>222</footer>
		</h1>
	</vzi>
</div>
</template>

<script>
  import zi from './test/zi';//当前目录需要。/
     export default{
         data(){//原始数据
             return{      
             	fu:'fu001'
             }
         },
         props: {//传递参数            

         },
         methods: {//方法
         	fu_method(){
         		this.fu='fu002-fu'
         	},
         	fu_zi_method(msg){
         		console.log(msg)
         		this.fu=msg
         	}
         },
         components: {//注册模块   
         	'vzi':zi
         },
         created(){//请求模块  比methods 快       
         	console.log(parseInt('123'))
         }
     }
 
</script>

<style lang="less" scoped="">

</style>