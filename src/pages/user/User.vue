<template>
    <div class="User">
        <div class="header">
           <div class="user-info">
                <div class="avatar">
                    <router-link to="/user/PersonalData">
                        <img :src="userData.avatar"/>  
                    </router-link>
                </div>
                <div class="user-msg">
                    <!-- <p class="user-name">{{userData.realname}}</p> -->
                    <p class="user-id">ID:{{userData.id}}</p>
                    <p class="recommender">推荐人:5623</p>
                    <!-- <p class="join-time">加入时间：{{userData.createtime | formatDate}}</p> -->
                </div>
            </div>
            <!-- <div class="member-msg">
                <div class="level" v-if="personalData.level === 0">普通用户</div>
                <div class="level" v-if="personalData.level === 1">VIP会员</div>
                <div class="level" v-if="personalData.level === 2">官方经理</div>
                <div class="level" v-if="personalData.level === 3">高级经理</div>
                <div class="level" v-if="personalData.level === 4">大区经理</div>
                <div class="level" v-if="personalData.level === 5">联合创始人</div>
            </div> -->
            
        </div>
        
        <div class="content">
            <!-- 模块 -->
            <!-- <div class="module-area">
                <router-link to="/user/AccountBalance" class="module-item" tag="div">
                    <p class="sub-title">
                        <i class="icon"><img src="/static/images/user/integral-icon.png" /></i>
                        <span class="text">积分</span>
                    </p>
                </router-link>
                <router-link to="/user/MyBenefits" class="module-item" tag="div">
                    <p class="sub-title">
                        <i class="icon"><img src="/static/images/user/profit-icon.png" /></i>
                        <span class="text">总收益</span>
                    </p>
                </router-link>
                <router-link to="/user/WithdrawalDetails" class="module-item" tag="div">
                    <div class="link-item">
                        <p class="sub-title">
                            <i class="icon"><img src="/static/images/user/money-icon1.png" /></i>
                            <span class="text">已提现</span>
                        </p>
                    </div>
                </router-link>
            </div> -->

            <div class="module-area">
                <router-link to="/user/AccountBalance" class="module-item" tag="div">
                    <p class="number">{{userData.remainder_money}}</p>
                    <p class="sub-title">
                        <!-- <i class="icon"><img src="/static/images/user/integral-icon.png" /></i> -->
                        <span class="text">积分</span>
                    </p>
                </router-link>
                <router-link to="/user/ProfitDetails" class="module-item" tag="div">
                    <p class="number">{{userData.distribut_money}}</p>
                    <p class="sub-title">
                        <!-- <i class="icon"><img src="/static/images/user/profit-icon.png" /></i> -->
                        <span class="text">总收益</span>
                    </p>
                </router-link>
                <router-link to="/user/WithdrawalDetails" class="module-item" tag="div">
                    <div class="link-item"> 
                        <p class="number">{{userData.get_all_lower}}</p>
                        <p class="sub-title">
                            <!-- <i class="icon"><img src="/static/images/user/money-icon1.png" /></i> -->
                            <span class="text">已提现</span>
                        </p>
                    </div>
                </router-link>
            </div>
            
            <div class="link-list">
                <router-link to="#" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/sign-in-icon.png" /></span>
                    <span class="text">签到</span>
                </router-link>
                <router-link to="/user/TeamList" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/team-icon.png" /></span>
                    <span class="text">我的团队</span>
                </router-link>
                <router-link to="/Purchase" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/wybd-icon.png" /></span>
                    <span class="text">我要报单</span>
                </router-link>
                 <router-link to="/user/ProfitDetails" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/jlmx-icon.png" /></span>
                    <span class="text">奖励明细</span>
                </router-link>
                <router-link to="/user/CashWithdrawal" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/xxtx-icon.png" /></span>
                    <span class="text">线下提现</span>
                </router-link>
                <router-link to="/user/BankCard" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/bank-card-icon.png" /></span>
                    <span class="text">银行卡列表</span>
                </router-link>
                 <router-link to="/notice/NoticeList" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/notice-icon1.png" /></span>
                    <span class="text">公告列表</span>
                </router-link>
                <router-link to="/user/Give" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/transfer-icon.png" /></span>
                    <span class="text">申请转账</span>
                </router-link>
                <router-link to="/user/GiveRecord" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/zzjl-icon.png" /></span>
                    <span class="text">转账记录</span>
                </router-link>
                 <router-link to="/user/mySharing" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/promotion-icon.png" /></span>
                    <span class="text">我的推广</span>
                </router-link>
                <router-link to="/EditPassword" class="link-item" tag="div">
                    <span class="icon"><img src="/static/images/user/edit-pwd-icon.png" /></span>
                    <span class="text">修改密码</span>
                </router-link>
                <div class="link-item" @click="logout()">
                    <span class="icon"><img src="/static/images/user/login-out-icon.png" /></span>
                    <span class="text">退出登录</span>
                </div>        
            </div>
        </div>

        <!-- 底部 -->
        <Navigate></Navigate>
    </div>
</template>

<script>
    import Navigate from "@/pages/common/footer/Navigate";
    export default {
        name: "User",
        components: {
            Navigate,
        },
        data() {
            return {
                userData:[],
                personalData:[],
                nowIndex:0,
            };
        },
        created(){
            this.$store.commit('showLoading')
            this.reqUser();
            this.reqPersonal();
            document.documentElement.scrollTop = 0; 
        },
        methods: {
            reqUser() {
                let url = 'user/user_info'
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{   
                    this.$store.commit('hideLoading')
                    if(res.data.status === 200){
                        this.userData = res.data.data;
                    }
                    else if(res.data.status === 999){
                        this.$store.commit('del_token'); //清除token;
                        setTimeout(()=>{
                            this.$router.push('/Login')
                        },1000)
                    }
                    else{
                        this.$toast(res.data.msg)
                    }
                })
            },
            
            reqPersonal() {
                let url = 'user/personal'
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{  
                    if(res.data.status === 200){
                        this.personalData = res.data.data;
                    }else{
                        that.$toast(res.msg)
                    }
                })
            },

            /**
             * 退出登录
             */
            logout() {
                let url = '/user/logout';
                this.$dialog.confirm({
                    title:'温馨提示',
                    message:'你确定要退出登录吗？'
                }).then(() => {
                    this.$axios.post(url,{
                        token:this.$store.getters.optuser.Authorization,
                    }).then((res) => {
                        this.$store.commit('del_token'); //清除token
                        if(res.data.status == 200){
                            this.$toast({message:"退出成功",duration:1000});
                            setTimeout(() => {
                                this.$router.push("/Login");
                            },1000)
                        }else{
                            this.$toast(res.data.msg)
                        }
                    })
                }).catch(() => {
                    // on cancel
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
        }
    };
</script>

<style lang="stylus" scoped>
    .User
        width 100%
        height 100%
        padding-bottom 114px
        .header
            width 100%
            height 320px
            background url(/static/images/user/topHeader-bg.png) no-repeat
            background-size 100%
            display flex
            justify-content space-between
            padding 30px 24px 0
            box-sizing border-box
            position relative
            z-index 1
            .user-info
                height 110px
                display flex
                align-items center
                .avatar
                    width 100px
                    height 100px
                    border-radius 50%
                    overflow hidden
                    margin-right 20px
                    img 
                        width 100%
                .user-msg
                    font-size 28px
                    color #ffffff
                    .join-time
                        font-size 24px
            .member-msg
                position absolute
                top 85px
                right 0
                z-index 9
                .level
                    width 155px
                    height 50px
                    line-height 50px
                    text-align center
                    font-size 24px
                    color #ffffff
                    background url(/static/images/user/level-bg.png) no-repeat 
                    background-size 100%
                    padding-left 10px
                    box-sizing border-box
        .content
            margin-top -120px
            position relative
            z-index 2
            .headline 
                width 100%
                height 60px
                color #333333
                display flex
                justify-content space-between
                align-items center
                border-bottom 1px solid #e5e5e5
                h3 
                    font-size 28px
                    font-weight normal
                    color #151515
                .more 
                    min-width 8px
                    min-height 14px
                    color #525252
                    font-size 24px
                    background url(/static/images/user/right-arrow2.png) no-repeat right center
                    background-size 8px 14px
                    padding-right 22px
            .module-area
                width 702px
                height 150px
                background-color #fff
                margin 0 auto 20px
                border-radius 10px
                display flex
                align-items center
                .module-item
                    flex 1
                    text-align center
                    .number
                        font-size 36px
                    .sub-title
                        font-size 28px 
                        display flex
                        align-items center
                        justify-content center
                        .icon
                            width 38px
                            height 38px
                            display inline-block
                            margin-right 15px
                            img 
                                width 100%
            .link-list 
                width 100%
                background-color #fff
                padding 40px 0 0 0
                box-sizing border-box
                display flex
                align-items center
                justify-content space-between
                flex-wrap wrap
                .link-item 
                    width 33%
                    font-size 28px
                    display flex
                    align-items center
                    justify-content space-between
                    flex-direction column
                    margin-bottom 24px
                    .icon
                        width 108px
                        height 80px
                        display inline-block
                        img
                            width 100%
                    .text
                        font-size 28px
                        line-height 86px
                   

</style>
