<template>
   <div class="ProfitDetails">
        <!-- 头部组件 -->
        <TopHeader custom-title="奖励明细">
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
        </TopHeader>

        <div class="content">
            <div class="details-container">
                <div class="thead">
                    <span>日期</span>
                    <span>积分</span>
                    <span>描述</span>
                </div>
                <div class="record-list">
                    <div class="record-item" v-for="(item,index) in this.profitList">
                        <div class="column">{{item.create_time | formatDate}}</div>
                        <div class="column">{{item.bonus_from | filterMoney}}</div>
                        <div class="column">{{item.note}}</div>
                    </div>
                </div>

                <!-- 无数据 -->
                <div class="none" v-show="profitList.length == 0">
                    <img src="/static/images/public/none.png"/>
                    <p>暂无相关数据</p>
                </div>

            </div>
        </div>
   </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'ProfitDetails',
    components: {
		TopHeader,
    },
    data() {
        return {
            type:'',
            name:'',
            profitList:[]
        };
    },
    created(){
        this.$store.commit('showLoading');  
        this.getprofitList();    
    },
    methods:{
        getprofitList(){
           let url = 'user/profit_edit';
           this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization
           }).then((res) => {
                this.profitList = res.data.data;
                this.$store.commit('hideLoading');  
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

            return y + '-' + MM + '-'+ d+' '+ h +':'+ m +':'+s;
        },
        filterMoney:function(val){
            var str = JSON.parse(val)
            return str.money
        }
    },

}
</script>

<style lang="stylus" scoped>
.ProfitDetails
    .details-container
        .thead  
            height 50px
            font-size 26px
            display flex
            align-items center
            justify-content space-between
            background-color #c6e1ff
            span 
                flex 1
                text-align center
                display block 
        .record-item
            width 100%
            height 70px
            display flex
            justify-content space-between
            align-items center
            background-color #f3f9ff
            .column
                flex 1
                text-align center
                font-size 20px
            &:nth-child(even)
                background-color #ecf4fc
        .none
            text-align center
            margin 150px auto
            img
                width 80px
            p
                margin 10px auto
                font-size 24px
           
</style>
