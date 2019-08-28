<template>
	<div class="MailList">
		<TopHeaderNew custom-title="好友">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
			<router-link to="/AddFriends" slot="rightBtn" tag="span">添加好友</router-link>
		</TopHeaderNew>

		<div class="mail-container">
			<!-- 通讯录列表 -->
			<div class="mail-list" ref="mailList">
				<div class="list-item" v-for="(items,index) in userData" :key="index">
					<p class="index">{{items.index}}</p>
					<div class="group-item" v-for="(item,index) in items.users">
						<div class="avatar"><img :src="item.avatar" /> </div>
						<div class="main">
							<div class="name">{{item.realname}}</div>
							<div class="user_id">ID:{{item.id}}</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 索引列表 -->
			<div class="index-list" ref="indexList">
				<div class="index-item" v-for="(item,index) in userIndex" :key="index" @click="setScroll($event)">{{item}}</div>
			</div>
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
			userData:[
				// {
				// 	"index":"A",
				// 	"users":[
				// 		{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"},
				// 		{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"},
				// 		{"name":"a小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"a小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"a小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"}
				// 	]
				// },
				// {
				// 	"index":"B",
				// 	"users":[
				// 		{"name":"b小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"b小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"b小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"}
				// 	]
				// },
				// {
				// 	"index":"C",
				// 	"users":[
				// 		{"name":"c小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"c小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"c小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"}
				// 	]
				// },
				// {
				// 	"index":"D",
				// 	"users":[
				// 		{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"},
				// 		{"name":"d小腊肉","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592622","id":"88890"},
				// 		{"name":"d小腊肉2","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592623","id":"88890"},
				// 		{"name":"d小腊肉3","avatar":"/static/images/maillist/avatar-img.png","tel":"17875592624","id":"88890"}
				// 	]
				// },
			]
		};
	},
	created(){
		this.getMailList();
	},
	mounted(){
		this.setIndePosition();
		window.addEventListener('scroll', this.monitorScrolling);
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

		/**
		 * 设置索引的位置
		 */
		setIndePosition(){
			var iH = this.$refs.indexList.offsetHeight; //索引盒子的高度
			this.$refs.indexList.style.marginTop = - iH / 2 + 'px';
			console.log(iH)
		},
		
		/**
		 * 设置滚动条
		 */
		setScroll(e){
			// console.log(e.target.innerHTML)
			var aP = this.$refs.mailList.getElementsByTagName('p');
			for(var i = 0;i< aP.length;i++){
				aP[i].classList.remove("fixed");
				if(aP[i].innerHTML == e.target.innerHTML){
					// console.log(aP[i].offsetTop)
					var scrollTop = aP[i].offsetTop;
					aP[i].classList.add("fixed");
					document.documentElement.scrollTop = scrollTop - 53.5; 
					document.body.scrollTop = scrollTop - 53.5; 
				}
			}
		},

		/**
		 * 监听滚动
		 */
		monitorScrolling(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var aP = this.$refs.mailList.getElementsByTagName('p');
			for(var i = 0;i< aP.length;i++){
				aP[i].classList.remove("fixed");
				if(scrollTop >= aP[i].offsetTop - 53.5 && scrollTop < aP[i+1].offsetTop){
					aP[i].classList.add("fixed");
				}
			}
		},

		/**
		 * 请求好友列表
		 */
		getMailList(){
			var url = 'friends/mail_list';
			this.$axios.post(url,{
				token:this.$store.getters.optuser.Authorization
			}).then((res) => {
				if(res.data.status == 200){
					this.userData = res.data.data
				}				
			}).catch((error) => {
				alert("请求失败：" + error)
			})
		}

	},

	
};
</script>


<style lang="stylus" scoped>
.MailList
	width 100%
	min-height 100%
	background-color #ffffff
	& /deep/ .TopHeader
		margin-bottom 10px
		color #ffffff
		background linear-gradient(to right,#00dafd 0%,#00a9ff 100%)
	.mail-container
		height 100%
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
					box-sizing border-box
					background-color #fff
				.fixed
					width 100%
					padding-left 68px
					box-sizing border-box
					position fixed
					top 88px
					left 0
					z-index 9
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
						margin-bottom 10px
					.user_id
						font-size 26px
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
