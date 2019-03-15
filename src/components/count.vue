<template>
	<nav class="count-box">

		<transition name='move'>
		<div class="sub" @click="subcount($event)"  v-show="food.counts>0">
			<img src="../../static/img/count/sub.png" class="count-icon" />
		</div>
		</transition>
		<div class="count" v-show="food.counts>0">{{food.counts}}</div>
		<div class="add" @click="addcount($event)">
			<img src="../../static/img/count/add.png" class="count-icon"/>
		</div>


	</nav>

</template>

<script>
	  import Vue from 'vue';//修改data 数据 需要实例化vue对象
    export default{


        props: {
	      	food: {
		        type: Object
		    },
		    toggle:{
		    	type:Boolean
		    },
		    selectFoods:{
		    	type:Array
		    }
	    },
        methods: {//方法
        	addcount(event){
        		/*注意:关闭后在第二个shoping处,无法使用  待解决*/
/*        		if (!event._constructed) {//关闭Pc 状态下  better-sc 的click 事件
			       return;
		        }*/
        		if(!this.food.counts){
        			 Vue.set(this.food, 'counts', 1);//修改data 数据 需要实例化vue对象
        		}else{
        			this.food.counts++;
        		}
        		event.cancelBubble = true;//阻止冒泡
        	},
        	subcount(event){
/*        		if (!event._constructed) {//关闭Pc 状态下  better-sc 的click 事件
			       return;
		        }*/
        		if(this.food.counts>0){
        			this.food.counts--;
        		}
  				event.cancelBubble = true;//阻止冒泡


        	}
        },
        components: {//注册模块
        },
        created(){//请求模块  比methods 快
        }
    }
</script>

<style scoped="" lang="less">
.count-box{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&>div{
			display: flex;
			align-items: center;



	}
	.sub{
		position: relative;
		z-index: 1;
				width: 6vw;
		height: 6vw;
	}
	.add{
		position: relative;
		z-index:2
	}



	.count{
		padding: 0 2vw;
	}
	.count-icon{
		width: 6vw;
		height: 6vw;
	}

}
	.move-enter-active, .move-leave-active{

		transition: all 0.3s ease
	}
.move-enter, .move-leave-active{

	transform: translate3D(150%,0,0);
	transform: rotate(180deg);
	opacity: 0;
}
</style>
