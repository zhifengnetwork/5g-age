<template>
    <div class="NoticeDetails">
        <!-- 头部组件 -->
		<TopHeader custom-title="公告详情">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="hat-bg"></div>
        <div class="content">
            <div class="details-container">
                <h1>{{noticeDetails.title}}</h1>
                <div v-html="noticeDetails.desc" class="desc"></div>
            </div>
        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'NoticeDetails',
    components:{
        TopHeader
    },
    data(){
       return{
           notice_id:this.$route.query.item_id,
           noticeDetails:[],
        }
    },
    created() {
        this.$store.commit('showLoading');
        this.reqnoticeDetails();
    },
    methods:{
        reqnoticeDetails() {
            var url = "user/announce_edit"
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                announce_id:this.notice_id
            }).then((res) => {  
                if(res.data.status === 200){
                    this.$store.commit('hideLoading')
                    this.noticeDetails = res.data.data;
                }else{
                    this.$toast(res.msg)
                }
            }).catch((error) => {
                alert("请求失败：" + error)
            })
        },
    },
 
}
</script>

<style lang="stylus" scoped>
.NoticeDetails
    height 100%
    background-color #f2f2f2
    & /deep/ .TopHeader
        color #ffffff
        background linear-gradient(to right,#00dafd 0%,#00a9ff 100%)
    .hat-bg
        content ''
        display block
        width 750px
        height 92px
        background url("/static/images/user/content-top-bg.png") no-repeat
        background-size 100%
        position fixed
        top 88px
        left 0
        z-index 1
    .content
        width 702px
        height 100%
        margin 0 auto
        border-radius 10px
        background-color #fff
        position relative
        z-index 9
        .details-container
            width 100%
            height 100%
            background-color #fff
            border-radius 10px
            padding 35px
            box-sizing border-box
            h1
                text-align center
                font-size 30px
                font-weight normal
                margin-bottom 20px
                line-height 50px
                padding 10px 0 20px
            .desc
                line-height 40px
                font-size 26px
                color #151515
                letter-spacing 2px
</style>
