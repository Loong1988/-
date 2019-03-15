<template>
	<section class="addfirst">
	<div class="box">

		<div class="d1">
			<nav class="big" @click="showtk">
				<nav class="cri" :class="{greens:num>0}">
					<div class="red" v-show="num>0">{{num}}</div>
				</nav>
			</nav>
			
		</div>
		<div class="d2">$ <span>{{foodPrice}}</span></div>
		<div class="d3">另需配送费￥{{seller.data.deliveryPrice}}元</div>
		<div class="d4" v-show="foodPrice<seller.data.minPrice">差￥{{priceSpread}}起送</div>
		<div class="d4 go" v-show="foodPrice>=seller.data.minPrice">去结算</div>

	</div>	
			<!--弹出框-->
		<transition name='foodstk'>
			<section class="food-tk" v-show="toggle">
				<header class="tit">
					<div class="left">购物车</div>
					<div class="right" @click="clear_methods">清空</div>
				</header>
				<ul>
					<li v-for="foods in selectFoods">
						{{foods.name}}  --${{foods.price}}
						<vcount :food='foods'  :toggle='toggle'  :selectFoods='selectFoods'></vcount> 
					</li>
				</ul>
			</section>
		</transition>
		<transition name='graytk'>
		<div class="gray" v-show="toggle" @click="showtk"></div>
		</transition>
	</section>

</template>

<script>
	 import count from './count';//当前目录需要。/
	    export default{
	        data(){//原始数据
	            return{ 
	            	
	            }
	        },
	        props: {//传递参数    
	        	seller: {
			        type: Object
			    },
			    selectFoods:{
			    	type:Array,//类型为数组 或对象  默认则必须为 函数
	
			    },
			    toggle:{}
	        },
	        methods: {//方法
	        	showtk(){
	        		if(this.num>0){	        			
	        			//this.toggle=!this.toggle
	        			this.$emit('childfn');
	        		}
	        		
	        	},
	        	clear_methods(){
	        		this.selectFoods.forEach((foods)=>{
	        			foods.counts=0
	        		})
	        	}
	        },
	        components: {//注册模块               
	        	'vcount':count
	        },
	        created(){//请求模块  比methods 快        
	        },
	        computed:{
	        	foodPrice(){
	        		var foodPrice=0;
	        		
	        		
	        		if(this.selectFoods.length>0){
		        		this.selectFoods.forEach((one)=>{
		        			foodPrice+=one.price*one.counts
		        		})
	        		}

	        		return foodPrice;
	        	},
	        	num(){
	        		var num=0
	        		if(this.selectFoods.length>0){
		        		this.selectFoods.forEach((food)=>{
		        			num+=food.counts
		        		})
	        		}
	        		return num;
	        	},
	        	priceSpread(){
	        		var sub=this.seller.data.minPrice
	        		
	        		return sub-this.foodPrice;
	        	},
	        	comput_tk(){
	        		if(this.num>0){
	        			return true
	        		}else{
	        			return false
	        		}
	        	}
	        }
	    }
	
</script>

<style lang="less"  scoped="">
.addfirst{
	position: fixed;
}
.box{
	background: #141d27;
	height: 15vw;
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	color: rgba(255,255,255,0.4);
	line-height: 15vw;
	z-index: 10;
	.d1{
		flex: 1.5;
		.big{
			width: 18vw;
			height: 18vw;
		    position: absolute;
		    top: -5vw;
		    background: #141d27;
		    left: 5vw;
		    border-radius: 9vw;
		    .greens{
		    	background:#fff url(../../static/img/shoping/shoping_act.png) no-repeat center center~'/' 60%!important;
		    }
		    .cri{
			    width: 14vw;
				height: 14vw;
				background: gray url(../../static/img/shoping/shoping.png) no-repeat center center~'/' 60% ;
				border-radius: 7vw;
				position: absolute;
				top: 2vw;
				left: 2vw;
				.red{
					background: red;
					padding: 0 0vw;
					height: 5vw;
					display: inline-block;
					line-height: 5vw;
					padding: 0 1.5vw;
					border-radius: 2.5vw;
					color: #fff;
					position: absolute;
				    top: -1vw;
				    right: 0;
				}
		    }
		}
	}
	.d2{
		flex: 1;
		position: relative;
	}
	.d3{
		flex: 2;
	}
	.d4{
		flex: 1.5;
	}
	.go{
		background: #4cd964;
		color: #fff;
	}
	div{
		text-align: center;
	}

}
	.food-tk{
		width: 100%;
		max-height: 60vh;
		overflow: scroll;
		position: fixed;
		bottom: 0;
		background:#fff;
		z-index: 5;
		padding-bottom: 20vw;
		.tit{
			display: flex;
			justify-content: space-between;
			height: 10vw;
			align-items: center;
			    background-color: #eceff1;
			&>div{
				width: 20vw;
				height: 100%;
				line-height: 10vw;
			}
		}
	}
	.foodstk-enter-active, .foodstk-leave-active{
         transition: all .2s  linear; 
	}
	 .foodstk-enter, .foodstk-leave-active{
		transform:translateY(30vw);
	}
	.graytk-enter-active, .graytk-leave-active{
         transition: all .1s  linear; 
	}
	 .graytk-enter, .graytk-leave-active{
		opacity: 0.8;
	}
	.gray{
		    background: rgba(7, 17, 27, 0.8);
		    position: fixed;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    z-index: 4;
	}
</style>