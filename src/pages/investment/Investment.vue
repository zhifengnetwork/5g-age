<template>
    <div class="Investment">
        <TopHeader custom-title="报单记录">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>

        <div class="content">
            <div class="investment-list">
                <div class="investment-item" v-for="(item,index) in recordData" :key="index">
                    <div class="money">报单金额：{{item.invest}}</div>
                    <div class="order-id">订单号:{{item.order_sn}}</div>
                    <div class="date">报单时间:{{item.create_time | formatDate}}</div>
                    <div class="status">报单状态：
                        <span v-show="item.state == 0">待审核</span>
                        <span v-show="item.state == 1">失败</span>
                        <span v-show="item.state == 2">成功</span>
                    </div>
                </div>
            </div>

             <!-- 无数据 -->
            <div class="none" v-show="recordData.length == 0">
                <img src="/static/images/public/none.png"/>
                <p>暂无相关数据</p>
            </div>

        </div>

       
    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'Investment',
    components: {
        TopHeader,
    },
    data(){
        return{
            user_id:'',
            recordData:[]
        }
    },
    created(){
        this.$store.commit('showLoading')
        this.getRecordData();
    },
    methods:{
        /**
         * 投资记录
         */
        getRecordData(){
            var url = 'user/record_list';
            this.$axios.post(url,{
                user_id:this.user_id,
                token:this.$store.getters.optuser.Authorization
            }).then((res) => {
                if(res.status == 200){
                    this.recordData = res.data;
                    this.$store.commit('hideLoading')
                }
            }).catch((error) => {
                alert("请求失败：" + error)
            })
        }
        
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
    }
   
}
</script>

<style lang="stylus" scoped>
.Investment
    height 100%
    .content
        height calc(100% - 98px) 
        padding 0 24px
        box-sizing border-box
        position relative
        .investment-list
            margin-top 20px
            .investment-item
                width 100%
                height 146px
                font-size 30px
                background-color #fff
                border-radius 10px
                padding 20px
                box-sizing border-box
                margin-bottom 20px
                div
                    float left
                    line-height 50px
                    margin-bottom 10px
                div:nth-child(even)
                    float right
                .order-id
                    font-size 24px
                .status
                    font-size 24px
                    color #666666
                    span 
                        color #00a8ff
               
        .none
            text-align center
            margin 0px auto
            position absolute
            left 50%
            top 50%
            z-index 3
            transform translate(-50%,-50%)
            img
                width 80px
            p
                margin 10px auto
                font-size 24px
                    

</style>
