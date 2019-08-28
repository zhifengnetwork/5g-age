<template>
    <div class="BankCard">
        <!-- 头部组件 -->
        <TopHeader custom-title="银行卡列表">
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
            <router-link to="/user/AddBankCard" class="add-card" tag="span" slot="rightBtn"></router-link>
        </TopHeader>

        <div class="content">
            <div class="bankList">
                <div class="card-item" v-for="(item,index) in bankList" :class="item.type">
                    <div class="card-name">{{item.bank_name}}</div>
                    <div class="card-number">{{item.bank_card}}</div>
                </div>
                
                <!-- <div class="card-item ICBC-sty" v-for="(item,index) in bankList" >
                    <div class="card-name">{{item.bank_name}}</div>
                    <div class="card-number">{{item.bank_card}}</div>
                </div> -->
                <!-- <div class="card-item CBC-sty">
                    <div class="card-name">建设银行</div>
                    <div class="card-number">****  ****  ****  0011</div>
                </div>
                <div class="card-item ABC-sty">
                    <div class="card-name">农业银行</div>
                    <div class="card-number">****  ****  ****  0011</div>
                </div>
                <div class="card-item CMSB-sty">
                    <div class="card-name">招商银行</div>
                    <div class="card-number">****  ****  ****  0011</div>
                </div>
                <div class="card-item BC-sty">
                    <div class="card-name">中国银行</div>
                    <div class="card-number">****  ****  ****  0011</div>
                </div>
                <div class="card-item">
                    <div class="card-name">其他银行</div>
                    <div class="card-number">****  ****  ****  0011</div>
                </div> -->
            </div>
        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'BankCard',
    components: {
        TopHeader,
    },
    data(){
        return{
            bankList:[]
        }
    },
    created(){
        // this.$store.commit('showLoading');
        this.getBankList();
    },
    methods:{
        /**
         * 获取银行卡列表
         */
        getBankList(){
            var url = 'user/bank_card';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization
            }).then((res) => {
                if(res.data.status == 200){
                    // console.log()
                    this.bankList = res.data.data
                }
                
            }).catch((error) => {
                alert("请求失败：" + error)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.BankCard
    width 100%
    height 100%
    background-color #fff
    .TopHeader 
        margin-bottom 20px
        .add-card
            width 32px
            height 32px
            display inline-block
            background url("/static/images/user/add-card1.png") no-repeat
            background-size 100%
    .content
        padding 0 24px
        box-sizing border-box
        .bankList
            .card-item
                width 100%
                height 180px
                color #ffffff
                background url("/static/images/user/other-bank-bg.png") no-repeat
                background-size 100%
                margin-bottom 20px
                display flex
                justify-content center
                flex-direction column
                padding 30px
                box-sizing border-box
                .card-name
                    font-size 30px
                    margin-bottom 30px
                .card-number    
                    font-size 36px
                &.ICBC-sty
                    background url("/static/images/user/ICBC-bg.png") no-repeat
                    background-size 100%
                &.CBC-sty
                    background url("/static/images/user/CBC-bg.png") no-repeat
                    background-size 100%
                &.ABC-sty
                    background url("/static/images/user/ABC-bg.png") no-repeat
                    background-size 100%
                &.CMSB-sty
                    background url("/static/images/user/CMSB-bg.png") no-repeat
                    background-size 100%
                &.BC-sty
                    background url("/static/images/user/BC-bg.png") no-repeat
                    background-size 100%


        

</style>
