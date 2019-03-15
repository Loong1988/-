<template>
	<div class="box" >

	    <div class="tab">
	    	<!--:class="{act:act}"-->
	    	
	    	<div>
	    		<router-link to="/one" active-class="act">商品</router-link>
	    	</div>
	    	 <div>	    	 	
	    	 	<router-link to="/two" active-class="act" >评价</router-link>
	    	 </div>
	    	 <div>
	    	 	<router-link :to="{path:'/three'}" active-class="act">商家</router-link>
	    	 </div>

	    </div>
	   
	     <router-view :seller='seller'></router-view>
	    
	</div>
</template>

<script>
export default {
	data() {//初始数据1  默认第一个act
	     return {
			/*acts:1*/
			
	    }
    },
    props:{
		    // 接受seller属性  18238888053
		    seller:{
		    	type:Object
		    }
	},
	methods:{
/*		tab(i){//tab切换方法
			this.acts=i
		},*/
		st(e){// <div @click="st($event)">asdf</div>
			console.log(e.target.innerHTML)
		},

	}
}

</script>

<style lang="less" scoped="">
	.tab{
		display: flex;
		color: #4d555d;
		
	    font-size: 4vw;
	    align-items: center;
		.act{
			/*background: #f3f5f7;*/
			    color: #f01414;
		}
		a{
			text-underline: none;
			display: block;
			width: 100%;
			height: 100%;
			color: #4d555d;
		}
		a:active{
			color: #222222;
		}
		div{
			flex: 1;
			
			text-align: center;
			height: 10vw;
   			 line-height: 10vw;
		}
	}
</style>