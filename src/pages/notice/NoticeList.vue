<template>
    <div class="NoticeList">
        <!-- 头部组件 -->
		<TopHeader custom-title="公告列表">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="hat-bg"></div>
        <div class="content">
            <div class="notice-list">
                <ul>
                    <router-link :to="'/notice/NoticeDetails?item_id='+ item.id " v-for="(item,index) in noticeList" :key="index" tag="li">
                        <h3>{{item.title}}</h3>
                        <div class="desc" v-html="item.desc"></div>
                        <span class="date">{{item.create_time | formatDate}}</span>
                    </router-link>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
// 公共头部
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'NoticeList',
    components:{
        TopHeader
    },
    data(){
        return{
           noticeList:[],
        }
    },

    created() {
        this.$store.commit('showLoading');
        this.reqNoticeData();
    },

    methods:{
        reqNoticeData() {
            var url = "user/announce_list"
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization
            })
            .then((res)=>{    
                if(res.data.status == 200){
                    this.$store.commit('hideLoading');
                    this.noticeList = res.data.data.list;
                }else{
                    that.$toast(res.msg)
                }
            })
        },
    },
    filters: {
        // 日期格式化
        formatDate: function (time) {
            let date = new Date(time*1000);
            let y = date.getFullYear();

            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;

            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;

            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;

            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;

            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;

            return y + '-' + MM + '-' + d ;
        }
    },
  
}
</script>

<style lang="stylus" scoped>
.NoticeList
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
        z-index 98
        .notice-list
            padding 20px
            box-sizing border-box
            ul
                li
                    height 190px
                    font-size 28px
                    background-color #fff
                    margin-bottom 20px
                    border-bottom 2px solid #bfbfbf
                    padding 20px 36px
                    box-sizing border-box
                    position relative
                    h3
                        line-height 44px
                        margin-bottom 20px
                        font-weight normal
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                    .desc
                        width 100%
                        font-size 26px
                        overflow hidden 
                        text-overflow ellipsis
                        display -webkit-box 
                        -webkit-box-orient vertical
                        -webkit-line-clamp 1 
                    .date
                        display block
                        color #999999
                        font-size 24px
                        line-height 44px
                        position absolute
                        right 36px
                        bottom 20px
                &:last-child
                    border-bottom none


</style>


