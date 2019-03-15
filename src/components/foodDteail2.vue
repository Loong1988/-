<template>
	<transition name='left_move'>
		<section class='foodDetail' v-show="flag">
			<div class="head">
				<img src="../../static/img/common/fanhui.png" class="back" @click="back_methods()"/>
				<img :src="foodone.image" class="imgs" />
			</div>
			<div class="pri">
				<p>{{foodone.name}}</p>
				<p>月销{{foodone.sellCount}} 好评{{foodone.rating}}</p>
				<div>
					<span class="color-red">${{foodone.price}}</span>
					<button class="btn">加入购物车</button>
				</div>			
				<h3 class="h3">商品信息</h3>
				<p>
					{{foodone.info}}
				</p>
			</div>
			
			<div class="discuss">
				<nav @click="dis(99)" :class="{'act':needtype==99}">全部{{foodone.ratings.length}}</nav>
				<nav @click="dis(1)" :class="{'act':needtype==1}">好评{{positives1.length}}</nav>
				<nav @click="dis(0)" :class="{'act':needtype==0}">差评{{positives0.length}}</nav>
			</div>
			<div class="dis-list">
				<ul>
					<li v-for="dis in foodone.ratings" v-show="needShow(dis.rateType,dis.text)">
						
						<div class="one">
							
							<nav class="left">{{dis.rateTime}}</nav>
							<nav class="right">
								<span>{{dis.username}}</span>  
								<img :src="dis.avatar" class="headtit"/>
							</nav>

						</div>
						
						<span>{{dis.text}}</span>
						<span style="color: #ddd;" v-if="dis.text==''">此用户没有评论！</span>
					</li>
				</ul>
			</div>
			
			
		</section>
	</transition>
</template>

<script>
	export default {
		data() { //原始数据
			return {
				flag: false,
				needtype:99,
				
			}
		},
		props: { //传递参数            
			foodone: {}
		},
		methods: { //方法
			show_methods() {
				this.flag = true;
			},
			back_methods(){
				this.flag = false;
			},
			needShow(type,text){
				if(this.needtype==99){
					return true
				}else{
					return this.needtype==type
				}
				
			},
			dis(type){
				this.needtype=type
			},

			
		},
		computed:{
			positives1() {
		        return this.foodone.ratings.filter((rating) => {
		          return rating.rateType==1;
		        });
	      	},
	      	positives0() {
		        return this.foodone.ratings.filter((rating) => {
		          return rating.rateType==0;
		        });
	      	},
		},
		components: { //注册模块               
		},
		created() { //请求模块  比methods 快        
		}
	}
</script>
<style lang="less">
	.foodDetail {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 15vw;
		background: #fff;
		width: 100%;
		    overflow: scroll;
    padding-bottom: 10vw;
		.head {
			width: 100vw;
			height: 100vw;
			.imgs {
				width: 100%;
				height: 100%;
			}
			.back {
				position: fixed;
				width: 3.5vw;
				padding: 2vw 3vw;
			}
		}
		.pri {
			padding: 0 3vw;
			.color-red {
				color: #f75731;
			}
			.btn {
				float: right;
				width: 25vw;
				height: 8vw;
				border-radius: 4vw;
				border: none;
				background: #2d78f4;
				color: #fff;
			}
			.h3{
				margin: 2vw 0;
			}
		}
		.discuss{
			display: flex;
			&>nav{
				width: 15vw;
				height: 8vw;
				background: #EEEEEE;
				margin: 2vw;
				text-align: center;
				line-height: 8vw;
			}
			.act{
				background: #2d78f4;
			}

		}
	}
	.dis-list{
		width: 94vw;
		padding: 0 3vw;
		
		li{
			border-bottom: 1px solid #eee;
			padding: 2vw 0;
		}
		.headtit{
			width: 5vw;
			height: 5vw;
			vertical-align: sub;
			border-radius: 2.5vw;
		}
		.one{
			display: flex;
			color: #94989c;
			justify-content: space-between;
			.left{
				flex: 2;
			}
			.right{
				flex: 1;
				text-align: right;
			}
		}
	}

</style>