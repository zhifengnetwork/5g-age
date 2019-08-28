<template>
    <div class="AddBankCard">
        <!-- 头部组件 -->
        <TopHeader custom-title="添加银行卡">
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
        </TopHeader>

        <div class="content">
            <div class="form-wrap">
                <div class="input-group">
                    <div class="sub-title">真实姓名:</div>
                    <div class="inp-wrap">
                        <input type="text" placeholder="请输入真实姓名" v-model="realName"/>
                    </div>
                </div>
                <div class="input-group">
                    <div class="sub-title">银行卡名称:</div>
                    <div class="inp-wrap">
                        <input type="text" placeholder="如工商银行" v-model="bankName" />
                    </div>
                </div>
                <div class="input-group">
                    <div class="sub-title">银行卡号:</div>
                    <div class="inp-wrap">
                        <input type="text" placeholder="请输入银行卡号"  v-model="bankNumber" />
                    </div>
                </div>
                <!-- <div class="input-group">
                    <div class="sub-title">开户地址:</div>
                    <div class="inp-wrap">
                        <input type="text" placeholder="请输入开户地址" v-model="bankAddress" />
                    </div>
                </div> -->
                <div class="confirm-btn" @click="addBankCard()">确定</div>
            </div>
        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'AddBankCard',
    components: {
        TopHeader,
    },
    data(){
        return{
           realName:'', 
           bankName:'',
           bankNumber:'',
        //    bankAddress:''
        }
    },
    created(){
        
    },

    methods:{
        /**
         * 添加银行卡
         */
        addBankCard(){
            if(!this.realName){
                this.$toast('姓名不能为空')
                return false
            }
            else if(!this.bankName){
                this.$toast('银行卡名称不能为空')
                return false
            }else if(!this.bankNumber){
                this.$toast('银行卡号不能为空')
                return false
            }
            else{
                var url = 'user/add_bank_card';
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization,
                    username:this.realName,
                    bank_name:this.bankName,
                    bank_card:this.bankNumber
                }).then((res) => {
                    if(res.data.status == 200){
                        this.$toast(res.data.data);
                        setTimeout(() => {
							this.$router.go(-1)
						}, 2000);
                    }else if(res.data.status == 999){
                        this.$store.commit('del_token');  //token，清除它;
                    }else{
                        this.$toast(res.data.msg)
                    }
                }).catch((error) => {

                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.AddBankCard
    & /deep/ .TopHeader
        background-color #f2f2f2
        border none
    .content
        margin-top 20px
        padding 0 24px
        box-sizing border-box
        .form-wrap
            .input-group
                height 88px
                background-color #fff
                border-radius 10px
                margin-bottom 30px
                display flex
                align-items center
                .sub-title
                    width 180px
                    font-size 30px
                    text-align right 
                    margin-right 40px
                .inp-wrap   
                    input 
                        font-size 24px 
            .confirm-btn
                width 92%
                height 88px
                font-size 30px
                line-height 88px
                text-align center
                color #ffffff
                background #00c5fe
                border-radius 40px
                position fixed
                left 50%
                margin-left -46%
                bottom 30px
    

</style>
