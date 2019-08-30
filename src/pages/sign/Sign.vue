<template>
  <div class="Sign">
    <TopHeader custom-title="签到">
      <i slot="backBtn" class="iconfont icon-fanhui"></i>
    </TopHeader>

    <div class="content">
      <div class="sign-wrap">
        <div class="sign-btn" @click="handleSign()">
          <span class="icon"></span>
          <span v-show="sign == true">已签到</span>
          <span v-show="sign == false">签到</span>
        </div>
        <div class="reward">
          <div class="reward-item">会员奖励：{{vip_rate}}</div>
          <div class="reward-item">推广奖励：{{vigor_day}}</div>
          <div class="reward-item">团队奖励：{{team_rate}}</div>
        </div>
      </div>

      <Calendar
        ref="Calendar"
        :markDate="signedArr"
        v-on:isToday="clickToday"
        agoDayHide="1530115221"
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"		
      ></Calendar>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader";
import Calendar from "vue-calendar-component";
export default {
	name: "Sign",
	components: {
		TopHeader,
		Calendar
	},
	data() {
		return {
			sign:'', //是否签到
			//标记数组
			signedArr: [
				// "2019/8/22",
				// "2019/8/23"
			], 
			vip_rate:'',
			vigor_day:'',
			team_rate:'',
			day:''
		};
	},

	methods: {
		clickDay(data) {
			console.log("选中了", data); //选中某天
			//   this.$toast("选中了" + data);
		},
		clickToday(data) {
			console.log("跳到了本月今天", data); //跳到了本月
		},
		changeDate(data) {
			//   this.$toast("切换到的月份为" + data);
			console.log("左右点击切换月份", data); //左右点击切换月份
		},
		demo() {
			this.$refs.Calendar.ChoseMonth("2018-12-13"); //跳到12月12日选中12月12日
		},

		/**
		 * 获取奖励数据
		 */
		getReward(){
			var url = 'user/my_record';
			this.$axios.post(url,{
				token:this.$store.getters.optuser.Authorization
			}).then((res) => {
				if(res.data.status == 200){
					this.vip_rate = res.data.data.vip_rate;
					this.vigor_day = res.data.data.vigor_day;
					this.team_rate = res.data.data.team_rate;
					this.sign = res.data.data.sign;
					if(res.data.data.sign == true){
						//获取当天日期
						var date = new Date();
						this.signedArr.push(date)
					}
				}
			})
		},

		/**
		 * 点击签到
		 */
		handleSign(){
			var url = 'user/sign_in';
			this.$axios.post(url,{
				token:this.$store.getters.optuser.Authorization
			}).then((res) => {
				if(res.data.status == 200){
					this.$toast("今日签到成功，获得2积分")
					//获取当天日期
					var date = new Date();
					this.signedArr.push(date);
					this.getReward()
				}else{
					this.$toast(res.data.msg)
				}
				console.log(res)
			}).catch((error) => {

			})
		},


	},
	created() {
		this.getReward();  //获取奖励数据
		function format(date, index) {
			date = new Date(date);
			return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
		}

		// this.signedArr = [
		// 	{
		// 		date: format(new Date(), this.day),
		// 		className: "mark"
		// 	},
		// ];

		// setTimeout(() => {
		// 	this.signedArr = [
		// 		{
		// 			date: format(new Date(), 27),
		// 			className: "mark"
		// 		},
		// 		{
		// 			date: format(new Date(), 28),
		// 			className: "mark"
		// 		}
		// 	];

		// 	// this.signedArr.push({
		// 	// 	date: format(new Date(), 29),
		// 	// 	className: "mark"
		// 	// });
		// }, 300);
	}
};
</script>

<style lang="stylus" scoped>
.Sign 
	& /deep/ .TopHeader 
		color #ffffff
		background linear-gradient(to right, #00dafd 0%, #00a9ff 100%)
	.content 
		.sign-wrap 
			width 100%
			height 400px
			background linear-gradient(to right, #00dafd 0%, #00a9ff 100%)
			padding 30px 0
			box-sizing border-box
			.sign-btn 
				width 350px
				height 88px
				border 2px solid #ffffff
				border-radius 50px
				color #ffffff
				font-size 30px
				margin 0 auto 20px
				display flex
				align-items center
				justify-content center
				.icon 
					width 50px
					height 50px
					display inline-block
					background url('/static/images/user/sign-icon.png') no-repeat
					background-size 50px 50px
					margin-right 20px
			.reward 
				color #ffffff
				text-align center
				font-size 26px
				.reward-item 
					line-height 40px
		.wh_container 
			width 92%
			position relative
			top -120px
		.wh_container >>> .wh_content_all 
			border-radius 10px
		.wh_container >>> .wh_content_all 
			background-color #ffffff
		.wh_container >>> .wh_content_item 
			color #000
		.wh_container >>> .wh_top_changge li 
			color #575958
		.wh_container >>> .wh_jiantou1, .wh_container >>> .wh_jiantou2 
			border-color #606261
		.wh_container >>> .wh_isToday
			color #ffffff
			background-color #00c6fe
		.wh_container >>> .wh_chose_day	
			border 1px solid #00c6fe
			background none
		.wh_container >>> .wh_isMark 
			width 70px
			height 70px
			background url("/static/images/user/mark-icon.png") no-repeat
			background-size 100% 
			color rgba(255,255,255,0)


/* .wh_container >>> .mark1 
  background-color orange


.wh_container >>> .mark2 
  background-color blue

.wh_content_item > .wh_isMark 
  background orange

.wh_container >>> .wh_content_all 
  background-color red */
</style>