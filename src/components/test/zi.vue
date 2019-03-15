<template>
	<div>
		<slot name="header"></slot>
		{{par}}
		<button @click="zi_methods">zi/按钮</button>
	</div>
</template>

<script>
	
	    export default{
	        data(){//原始数据
	            return{             
	            }
	        },
	        props: {//传递参数     
	        	par:{
	        		
	        	}
	        },
	        methods: {//方法
	        	zi_methods(){
	        		 //this.$emit('childfn', 'zi003');
//	        		 this.par=1
	        		 this.$emit('update:par', 132)
	        	}
	        },
	        components: {//注册模块               
	        },
	        created(){//请求模块  比methods 快        
	        }
	    }
	
</script>

<style>
</style>