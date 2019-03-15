<template>
	<div>
		<p>b组件接受:{{bb}}</p>
		
	</div>
</template>

<script>
	import bus from '../../../static/js/bus.js'
	export default{
	    data(){//原始数据
	        return{    
	        	a:''
	        }
	    },
	    props: {//传递参数     
	    	bb:''
	    },
	    computed:{ //计算属性
	    },
	    components: {//注册模块               
	    },
	    created(){//请求模块  比methods 快        
	    },
	    mounted() {//比created慢  el 加载完毕
			bus.$on('getTarget', target => {  
			    console.log(`接受到:::${target}`);  
			});  
	    },
	    methods: {//方法

	    }
	}
	
</script>

<style>
</style>