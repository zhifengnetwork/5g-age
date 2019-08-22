<template>
	<div class="MailList">
		<TopHeaderNew custom-title="好友">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
			<span slot="rightBtn">添加好友</span>
		</TopHeaderNew>

		<div class="mail-container" >
			<van-index-bar v-for="(items,index) in userData" :indexList = userIndex>
				<van-index-anchor :index="items.index"  />
				<van-cell :title="item.name" v-for="(item,index) in items.users" />
			</van-index-bar>
		</div>

		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import TopHeaderNew from "@/pages/common/header/TopHeader";
import Navigate from "@/pages/common/footer/Navigate";

export default {
	name: "MailList",
	components: {
		Navigate,
		TopHeaderNew
	},
	data() {
		return {
			// indexList:["A","B","C","D","E","F",],
			userData:[
				{
					"index":"A",
					"users":[
						{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"}
					]
				},
				{
					"index":"B",
					"users":[
						{"name":"b小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"b小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"b小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"}
					]
				},
				{
					"index":"C",
					"users":[
						{"name":"c小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"c小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"c小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"}
					]
				},
				{
					"index":"D",
					"users":[
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"}
					]
				},
				{
					"index":"E",
					"users":[
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"},
						{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622"},
						{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623"},
						{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624"}
					]
				},
			]
		};
	},

	computed:{
		/**
		 * 计算过滤后的索引值
		 */
		userIndex(){
			return this.filterIndex(this.userData)
		},
	},

	methods:{
		/**
		 * 过滤索引值
		 */
		filterIndex(data){
			var result = [];
			for(var i = 0; i < data.length; i++){
				if(data[i].index){
					result.push(data[i].index);
				}
			}
			return result;
		},
	}

	
};
</script>


<style lang="stylus" scoped>
.MailList
	width 100%
	min-height 100%
	background-color #ffffff
	.mail-container
		height 100%
		margin-top 10px
		padding 0 28px 98px
		box-sizing border-box
		.mail-list
			.list-item
				.index
					width 100%
					color #686868
					font-size 24px
					height 42px
					line-height 42px
					padding-left 40px
					background-color #fff
				.group-item
					display flex
					align-items center
					margin-bottom 30px
					.avatar
						width 100px
						height 100px
						border-radius 50%
						margin-right 40px
						img 
							width 100%
					.name
						font-size 30px
						padding-top 15px
		.index-list
			width 26px
			font-size 24px
			color #686868
			text-align center
			position fixed
			right 28px
			top 50%
			.index-item
				line-height 40px
					

	
</style>
