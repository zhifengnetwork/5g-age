<template>
    <div class="TeamList">
        <!-- 头部组件 -->
        <TopHeader custom-title="团队列表">
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
        </TopHeader>

        <div class="content">
            <div class="total-team">团队总人数：{{all_member}}</div>
            <div class="tab-title">
                <div class="item" @click="handleTitle(1)" :class="{'active':type == 1}">
                    <span>直推会员</span>
                    <span>{{directNumber}}</span>
                </div>
                <div class="item" @click="handleTitle(2)" :class="{'active':type == 2}">
                    <span>二级会员</span>
                    <span>{{second_level}}</span>
                </div>
                <div class="item" @click="handleTitle(3)" :class="{'active':type == 3}">
                    <span>三级会员</span>
                    <span>{{three_level}}</span>
                </div>
                <div class="item" @click="handleTitle(4)" :class="{'active':type == 4}">
                    <span>其他会员</span>
                    <span>{{otherNumber}}</span>
                </div>
            </div>
            <div class="tab-container">
                <div class="thead">
                    <span>用户ID</span>
                    <span>名称</span>
                    <span>电话</span>
                    <span>订单</span>
                </div>
                <div class="member-list">
                    <div class="member-item" v-for="(item,index) in teamList" :key="index">
                        <div class="column">{{item.id}}</div>
                        <div class="column">{{item.realname}}</div>
                        <div class="column" @click="onCall(item.mobile)">{{item.mobile}}</div>
                        <router-link :to="'/user/ViewOrders?user_ids=' + item.id" class="column" tag="div">查看</router-link>
                    </div>
                </div>

                <!-- 无数据 -->
                <div class="none" v-show="teamList.length == 0">
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
    name:'TeamList',
    components: {
        TopHeader,
    },
    data(){
        return{
           type:1, 
           isActive:true,
           teamList:[],
           all_member:0,
           directNumber:0,
           second_level:0,
           three_level:0,
           otherNumber:0,
        }
    },
    created(){
        this.$store.commit('showLoading');
        this.handleTitle(1);
    },
    methods:{
        /**
         * 标题切换
         */
        handleTitle(i){
            this.type = i;
            if(i == 1){
                this.isActive = true
            }else{
                this.isActive = false
            }

            let url = 'user/team_lists';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                type:this.type
            }).then((res) => {
                if(res.data.status == 200){
                    this.teamList = res.data.data.list;
                    this.all_member = res.data.data.all_member;
                    this.directNumber = res.data.data.num[1];
                    this.second_level = res.data.data.num[2];
                    this.three_level = res.data.data.num[3];
                    this.otherNumber = res.data.data.num[4];
                }else{
                    this.$toast(res.data.msg)
                }
                this.$store.commit('hideLoading')
            }).catch((error) => {

            })
            
        },

        /**
         * 拨打电话
         */
        onCall(tel){
            // console.log(tel)
            window.location.href = `tel:${tel}`; 
        }

    }
}
</script>

<style lang="stylus" scoped>
.TeamList
    height 100%
    background-color #fff
    .content
        padding 0 24px
        box-sizing border-box
        .total-team
            width 100%
            height 80px
            line-height 80px
            text-align center
            font-size 30px
            border 1px solid #ebebeb
            border-radius 10px
        .tab-title
            height 70px
            font-size 28px
            background-color #ffffff
            margin 20px 0
            display flex
            align-items center
            justify-content space-around
            .item 
                flex 1
                height 80px
                font-size 24px
                text-align center
                height 100%
                color #666666
                margin-right 10px
                border 1px solid #ebebeb
                box-shadow 0px 0px 5px #ebebeb
                border-radius 10px
                display flex
                flex-direction column
                align-items center
                justify-content center
                &.active
                    color #151515
                    background-color #a9d2ff
                &:last-child
                    margin-right 0
        .tab-container
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
            .member-item
                width 100%
                height 70px
                display flex
                align-items center
                background-color #f3f9ff
                .column
                    flex 1
                    text-align center
                    font-size 22px
                .column:nth-child(4)
                    word-wrap break-word
                    color #0079ff
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
