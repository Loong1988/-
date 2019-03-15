<template>
	<div class="star-box">
		<div v-for="x in starNum" class="for-box">
			<img :src='x'/>
		</div>
	</div>
</template>

<script>
	const star_show='../../../static/img/star_show.png'
	const star_hide='../../../static/img/star_hide.png'
	export default{
		 props: {
		    // 接受seller属性  18238888053
		    star:{
		    	type:Number
		    }
		   
	    },
	   	computed : {
            starNum(){
            	var arr=[]
            	for(var i=0;i<this.star;i++){
            		arr.push(star_show)
            	}
            	if(arr.length<5){
            		for(var i=0;i<5-this.star;i++){
	            		arr.push(star_hide)
	            	}
            	}
            	return arr;
            }
        }
	}
	
	

</script>

<style lang="less" scoped="">
	.star-box{
		color: #fff;
		    display: flex;
    justify-content: center;
		.for-box{
			    width: 6vw;
     			height: 6vw;
     			margin-right:1vw;
		
			img{
				width: 100%;
			}
		}
	}
</style>