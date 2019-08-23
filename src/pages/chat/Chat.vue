<template>
	<div class="Chat">
		
		<div class="content">
			<div class="tips">暂不开放</div>
		</div>

		<!-- 底部导航 -->
		<Navigate></Navigate>

	</div>
</template>

<script>
import Navigate from "@/pages/common/footer/Navigate"

export default {
	name: "Chat",
	components: {
		Navigate,
	},
	data() {
		return {

		};
	},
};
</script>


<style lang="stylus" scoped>
.Chat
	width 100%
	height 100%
	background-color #ffffff
	background-size 100% 
	.content
		width 100%
		height 100%
		position relative
		.tips
			width 600px
			height 500px
			font-size 36px
			box-shadow 0px 0px 8px #e8e8e8
			display flex
			align-items center
			justify-content center
			position absolute
			left 50%
			top 50%
			transform translate(-50%,-50%)
			margin-top -49px
	
</style>
