<template>
	<section>
		<div class="heads">3333</div>
		<footer class="foots">foot</footer>

		<input type="" name="" id="" value="" v-model="val==1?one:two"/>
		<input type="" name="" id="" value="" v-model="mo"/>
		<button @click="val2">val2</button>
    	<div class="a"></div>
		{{mo}}
		bb:{{bb}}
		<aa :abc='abc'  @bmsg = "bmsg"></aa>
		<bb :bb='bb'></bb>
		
	</section>
</template>

<script>
//import"static2/css/three.css"//static2 是我在webpack.base.conf.js 设置的代理名称  路径=/static
import aa from './test/a'
import bb from './test/b'
import Vue from 'vue'
	let vm = new Vue(); //创建一个新实例
export default{
    data(){//原始数据
        return{
        	 checkedNames: [],
        	 one:'1',
        	 two:'2',
        	 val:'1',
        	 abc:'df',
        	 bb:'old'
        }
    },
    props: {//传递参数
    },
    methods: {//方法
    	val2(){
    		this.val=2
    	},
    	bmsg(data){
    		console.log('data')
    		this.bb=data
    	}
    },
    computed:{
    	mo(){
    		var m=this.val==1?this.one:this.two
    		return m
    	}
    },
    components: {//注册模块
    	aa,bb
    },
    created(){//请求模块  比methods 快

    }
}

</script>

<style scoped="" lang="less">

.heads{
	height: 100px;
	width: 100%;
	background: gainsboro;
	border-bottom: 1px red solid ;  /*px*/

}
[data-dpr="3"] .heads{
	color: red;
}
.heads {
    font-size: 30px;
}



</style>
<style lang="less" src="static2/css/three.less" scoped=""></style>
