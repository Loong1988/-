<template>
	<div class="header" >
		<div :style="{'background-image': 'url('+ seller.data.avatar+')'}">
			{{seller.data.name}}
			<nav class="img-text">
			<img :src='seller.data.avatar' class="nav1"/>
			<aside class="nav2">
				<p>
					<span class="brand">品牌</span> {{seller.data.name}}
				</p>
				<p class="font24">{{seller.data.description}}/{{seller.data.deliveryTime}}分钟送达</p>
				<div class="p3 font20">
					<img src="./img/header/sub.png"/>
					
					<span>{{seller.data.supports[0].description}}</span>
					<footer @click="tkShow">{{seller.data.supports.length}}个</footer>
				</div>
			</aside>

		</nav>
		
		<nav class="foot" @click="tkShow">
			<div class="lang">
				<i></i><span>{{seller.data.bulletin}}</span>
			</div>
		</nav>
		
		<!--详情弹矿-->
		<div v-show="detailShow" class="detail">
			<header>
				<h1>{{seller.data.name}}</h1>
				<v-star :star='seller.data.score'></v-star>

			</header>
			<footer @click="tkClose">
				X
			</footer>
		</div>
		</div>
		
			
		
	</div>
</template>

<script>
import star from './star/star';
	export default{
		data(){
		  	return{
		  		detailShow:false
		  	}
	    },
	  props: {
		    // 接受seller属性  18238888053
		    seller:{
		    }
		   
	  },

	  methods: {
	    tkShow() {
	     this.detailShow=true
	    },
	    tkClose(){
	    	 this.detailShow=false
	    }
	  },
	  	components: {//注册模块
				'v-star':star
		}

	}
</script>

<style lang="less">
	@import url("../common/common.css");
	@w750:7.5;
	.font24{
		font-size: 24vw/@w750;
	}
	.font20{
		font-size: 20vw/@w750;
	}
	.header{
		
		width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

		/*height: 265vw/@w750;*/
		overflow: hidden;

		.img-text{
			width: 680vw/@w750;
			height: 128vw/@w750;
			margin: 48vw/@w750 0 0 48vw/@w750;
			
			display: flex;
			.nav1{
				
			}
			.nav2{
				flex: 5;
				font-size: 32vw/@w750;
				color: #fff;
				p{
					text-indent:20vw/@w750;
				}
				.brand{
					
					background: #f01414;
					padding:2px 5px;
					font-size: 28vw/@w750;
				}
				.p3{
					/*height: 40vw/@w750;*/
					position: relative;
					    text-indent: 2.66666667vw;
					span{
						line-height: 26vw/@w750;
					}
					img{
						width: 26vw/@w750;
						height:26vw/@w750;
						vertical-align: middle;
					}
					footer{
						background: rgba(0,0,0,0.2);
					    position: absolute;
					    right: 40px;
					    bottom: 0px;
					    padding: 2px 15px;
					    border-radius: 20px;
					    text-align: center;
					    text-indent: 0;
					}
				}
			}

			img{
				width: 128vw/@w750;
				height: 128vw/@w750;
				border-radius: 5px;
			}
		}
		.foot{

			background: rgba(7,17,27,0.2);
			margin-top: 10px;
			.lang{
				display:flex;
				align-items: center;
				height: 7vw;
				i{
					background: url(img/header/bulletin@3x.png) no-repeat center ~'/' 100%;
				    width: 150px;
	    			height: 30px;
				    display: inline-block;
				    margin: 0 10px;

				}
				span{
					
					font-size: 3.5vw;
				    font-weight: 200;
				    color: #fff;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    padding-right: 20px;
				    
				}
			}

		}
		.detail{
		    position: fixed;
		    top: 0;
		    left: 0;
		    z-index: 250;
		    width: 100%;
		    height: 100%;
		    background: rgba(7,17,27,0.8);
		    overflow: auto;
		    display: flex;
		    flex-direction: column;
		    header{
		    	height: 20vh;
		    	width: 60vw;
		    	border: 10px solid red;
		    	margin:20vw auto;
		    	flex: 1;
		    	h1{
		    		color: #fff;
		    		text-align: center;
		    	}
		    }
		    footer{
		    	text-align: center;
		    	color: #fff;
		    	height: 15vw;
		    	line-height: 15vw;
		    	font-size: 6vw;
		    	
		    }
		}
	}
</style>