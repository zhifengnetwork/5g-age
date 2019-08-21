<template>
	<div class="Chat">
		暂不开放
	
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
	min-height 100vh
	background-color #ffffff
	background-size 100% 
	
</style>
