<template>
	<div class="AddFriends">
		<TopHeaderNew custom-title="添加好友">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
			<router-link to="/user/Give" slot="rightBtn" tag="span"></router-link>
		</TopHeaderNew>

		<div class="content">
			<div class="input-group">
				<input type="text" placeholder="请输入好友ID" v-model="user_id">
			</div>
			<div class="confirm-btn" @click="addFriends()">确定</div>
		</div>

	</div>
</template>

<script>
import TopHeaderNew from "@/pages/common/header/TopHeader";


export default {
	name: "AddFriends",
	components: {
		TopHeaderNew
	},
	data() {
		return {
			user_id:''
		};
	},

	methods:{
		/**
		 * 添加好友
		 */
		addFriends(){
			var url = 'friends/add_friends';
			this.$axios.post(url,{
				token:this.$store.getters.optuser.Authorization,
				to_user:this.user_id
			}).then((res) => {
				if(res.data.status == 200){
					this.$toast(res.data.data)
				}else{
					this.$toast(res.data.msg)
				}
				
			}).catch((error) => {
				alert("数据请求失败：" + error)
			})
		}
	},

	
};
</script>


<style lang="stylus" scoped>
.AddFriends
	width 100%
	min-height 100%
	background-color #ffffff
	& /deep/ .TopHeader
		margin-bottom 20px
		color #ffffff
		background linear-gradient(to right,#00dafd 0%,#00a9ff 100%)
	.content
		padding 0 24px
		box-sizing border-box
		.input-group
			height 80px
			border-radius 10px
			margin-bottom 30px
			display flex
			align-items center
			box-shadow 0px 0px 10px #ebebeb
			border 1px solid #ebebeb
			input 
				width 100%
				height 50px
				padding 10px
				font-size 26px
		.confirm-btn
			width 92%
			height 88px
			font-size 30px
			line-height 88px
			text-align center
			color #ffffff
			background #00cffd
			border-radius 40px
			position fixed
			left 50%
			margin-left -46%
			bottom 30px
	
					

	
</style>
