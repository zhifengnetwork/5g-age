<template>
     <div class="Navigate">
        <ul>
 			<li>
 				<router-link exact to="/Chat">
                    <i class="chat-icon">
						<span class="num">8</span>
					</i>
 					<span class="text">聊天</span>
 				</router-link>
 			</li>
 			<li>
 				<router-link to="/MailList">
 					<i class="mail-list-icon"></i>
 					<span class="text">好友</span>
 				</router-link>
 			</li>
 			<li>
 				<router-link to="/User">
 					<i class="user-icon"></i>
 					<span class="text">我的</span>	
 				</router-link>
 			</li>
 		</ul>
    </div>
</template>

<script>
    export default {
        name:'Navigate',
        data(){
            return{
                
            }
        }
        
    }
</script>

<style lang="stylus" scoped>
.Navigate
	width 100%
	height 98px
	background #e9e9e9
	z-index 9
	position fixed
	left 0
	bottom 0
	ul
		display flex
		height inherit
		li
			flex 1
			a
				width 100%
				height 100%
				display flex
				flex-direction column
				align-items center 
				justify-content center
				i
					width 44px
					height 44px
					margin 3px 0
					display block
					position relative
					font-style normal
				.chat-icon
					background url(/static/images/public/chat-icon.png) no-repeat center center
					background-size 44px 44px
				.mail-list-icon
					background url(/static/images/public/mail-list-icon.png) no-repeat center center
					background-size 44px 44px
				.user-icon
					background url(/static/images/public/user-icon.png) no-repeat center center
					background-size 44px 44px
				span
					font-size 28px
					color #686868
				.num
					width 20px
					height 20px
					line-height 20px
					font-size 16px
					color #ffffff
					text-align center
					border-radius 50%
					background-color #ff0018
					position absolute
					top -5px
					right -6px
			.router-link-exact-active
				.chat-icon
					background url(/static/images/public/chat-icon-on.png) no-repeat center center
					background-size 44px 44px
				.mail-list-icon
					background url(/static/images/public/mail-list-icon-on.png) no-repeat center center
					background-size 44px 44px
				.user-icon
					background url(/static/images/public/user-icon-on.png) no-repeat center center
					background-size 44px 44px
				span
					color #151515
				.num
					color #ffffff	
</style>


