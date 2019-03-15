<template>
	<div class="goods">
<!--	{{ goods.data[0].name +'---'}}
	{{selectFoods}}-->
		<div class="left goods-left" >
			
			<ul>
				<li @click="selectMenu(index,$event)" v-for="(x,index) in goods.data" :class="{'act':countIndex==index}">{{x.name}}</li>
			</ul>
		</div>
		<div class="right goods-right">
			<aside>
			<div  v-for="x in goods.data" class="foods-right-one">
				<nav class="foods-tit">{{x.name}}</nav>
				<ul class="foods-list">
					<li @click="foodone_methods(x2,$event)" v-for="x2 in x.foods">
						<aside class="right-box">
							<div class="foods-left  d1" :style="{'background-image': 'url('+ x2.icon+')'}">
								
							</div>
							<div class="foods-right d1">
								<h3>{{x2.name}}</h3>
								<p>{{x2.description}}</p>
								<p><span>月售{{x2.sellCount}}份</span>  <span>好评率{{x2.rating}}%</span></p>
								<div id="">
									<span>${{x2.price}}</span>
								</div>
								
								<vcount :food='x2'></vcount>
								
							</div>
						</aside>
					</li>
				</ul>
			</div>
			</aside>
			
		</div>
		<vfoodDteail2 :foodone='fooddetail2' ref='foodd'></vfoodDteail2>
		
		<!--底部购物车组件                      :select-foods='selectFoods'                 -->
		<vshoping v-on:childfn="toggle_methods" :seller='seller' :toggle='toggle'   :select-foods='selectFoods'></vshoping>
	</div>
</template>

<script>
	

  import BScroll from 'better-scroll';//引入滑动插件
  import shoping from './shoping';//当前目录需要。/
  import count from './count';//当前目录需要。/
  import foodDteail2 from './foodDteail2';//当前目录需要。/
    export default{
        data(){//原始数据
            return{   
            	goods:{},
            	listHeight: [],
            	scrollY: 0,
            	selectedFood: {},
            	toggle:false,
            	fooddetail2:{}
            }
        },
        props: {//传递参数         
	      seller: {
	        type: Object
	      },
	      
        },
        methods: {//方法
        	_initScroll() {//初始化插件
		        this.menuScroll_left = new BScroll('.goods-left', {
		        	click: true//开启点击事件，不然  无法点击
		        });
		        this.menuScroll_right = new BScroll('.goods-right', {
		        	click: true,
		        	probeType: 3//跟踪滑动时的高度
		        });
		        this.menuScroll_right.on('scroll', (pos)=>{
		          this.scrollY = Math.abs(Math.round(pos.y));//四舍五入+绝对值   不然是负数
		        });
	        },
	        _countHeight(){//计算右侧高度  以及 每个分类的高度节点   添加在数组中
	        	var foodList=this.$el.querySelectorAll('.foods-right-one')
	        	var height = 0;
	        	this.listHeight.push(height)
	        	for(var i=0;i<foodList.length;i++){
	        		var oneHeight=foodList[i]//节点
	        		height+=oneHeight.clientHeight//每个分类 高度递增
	        		this.listHeight.push(height)//每个分类的高度节点   添加在数组中
	        	}
	        },
	        selectMenu(index,event){
	        	console.log(index)
		       	if (!event._constructed) {//关闭Pc 状态下  better-sc 的click 事件
			       return;
		        }		       
		       	var rightDom=this.$el.querySelectorAll('.foods-right-one')
		       this.menuScroll_right.scrollToElement(rightDom[index], 300);
	        },  
	        toggle_methods(){
	        	this.toggle=!this.toggle
	        },
	        foodone_methods(food,event){
	        	if (!event._constructed) {//关闭Pc 状态下  better-sc 的click 事件
			       return;
		        }
	    /*    	this.fooddetail2=food;
	        	this.$refs.foodd.show_methods()*/
	        }

        	
        },
        computed:{
        	countIndex(){
        		for(var i=0;i<this.listHeight.length;i++){
        			let height1 = this.listHeight[i];//从0开始
          			let height2 = this.listHeight[i + 1];//到第一个区间
          			//!height2 表示  没有下标越界
          			if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
          				return i;
          			}
        		}
        		return 0;//初始  默认第一个
        	},
        	
	        selectFoods() {
			        var foods = [];
			        var good1=this.goods.data

					good1.forEach(function(item){
						item.foods.forEach(function(food){
								if(food.counts&&food.counts>0){
									foods.push(food)
								}
						});
					});
					console.log(foods);
					if(foods.length==0){
						this.toggle=false;
					}
			        return foods;
			}
        },
        components: {//注册模块             
        	'vshoping':shoping,
        	'vcount':count,
        	'vfoodDteail2':foodDteail2
        },
        created(){//请求模块  比methods 快        
        	this.$http.get('/api/goods').then(function (res) {
				//成功
				res=res.data//
				
				if(res.errno==0){
					this.goods=res
					this.$nextTick(function() {//刷新dom
							this._initScroll();//使用 插件
							this._countHeight();//初始化  每个分类  高度集合
        			})
					
				}
			},function (res) {
				//失败
			})
        }
    }

</script>

<style lang="less">
	*{margin: 0;padding: 0; list-style: none;}
	.goods{
		display: flex;
		background: #f3f5f7;
		height: 70vh;
		font-size: 3.5vw;
		.left{
			flex: 0 0 20vw;
			overflow: hidden;
			.act{
				background: #fff;
				    border-left: 1vw solid #3190e8;
			}
					li{
				   
				    padding: 0 2vw;
				    height: 15vw;
				    display: flex;
				    align-items: center;
				    
				}
			

		}
		.right{
			width: 100%;
			overflow: hidden;
			.foods-tit{
				    height: 10vw;
				    font-size: 3.5vw;
				    line-height: 10vw;
				    padding-left:2vw;
				    border-left: 2px solid #d9dde1;
				    background: #f3f5f7;
				    color: #93999f;
			}
			.foods-list{
				background: #FFFFFF;
				li{
					overflow: hidden;
					padding: 2vw 2vw 0 2vw;
					.right-box{
						border-bottom:1px solid #ccc ;
						.d1{
							float: left;
							
							height: 20vw;
						}
						.foods-left{
							width: 20vw;
							
							background-repeat: no-repeat;
							background-size: 16vw;
							background-position: center;
						}
						.foods-right{
							height: auto;
							width: 55vw;
						}
					}

				}
			}
		}
	}
	
</style>