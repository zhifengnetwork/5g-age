<template>
    <div class="Purchase">
        <TopHeader custom-title="我要报单">
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
			<router-link to="/Investment" slot="rightBtn" tag="span">报单记录</router-link>
		</TopHeader>

        <div class="content">
            <div class="purchase-list">
                <div class="purchase-item" v-for="(item,index) in memberList" :key="index" @click="singerSelected(item)">
                    <div class="sub-title">{{item.cardmoney}}</div>
                    <div class="check">
                        <input type="radio" :checked="item.checked" name="cardmoney" >
                    </div>
                </div>
            </div>
            
            <div class="uploader">
                <van-uploader
                    v-model="fileList"
                    multiple
                    :max-count="1"
                    upload-text = "添加图片" 
                    />
                <p class="vouchers">上传凭证</p>
            </div>


            <div class="confirm-btn" @click="submitClick()">提交</div>

        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
import VueClipboard from 'vue-clipboard2'
export default {
    name:'Purchase',
    components: {
        TopHeader,
    },
    data(){
        return{
            level_id:'',
            memberList:[], //套餐列表
            fileList: [], //上传预览图
        }
    },

    created(){
        this.getMemberList();
    },

    methods:{
        /**
         * 选择套餐
         */
        singerSelected(item){
            this.memberList.forEach(item => {
                item.checked = false
            });
            this.$set(item,'checked',true);
            this.level_id = item.level; //套餐id
        },

        /**
         * 获取套餐列表
         */
        getMemberList(){
            var url = 'user/member_list';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
            }).then((res) => {
                if(res.data.status == 200){
                    this.memberList = res.data.data;
                    this.level_id = res.data.data[0].level;
                }
                else if(res.data.status == 999){
                    this.$store.commit('del_token'); 
                    setTimeout(() => {
                        this.$router.push("/Login");
                    }, 1000);
                }
                else{
                    this.$toast(res.data.msg)
                }
            }).catch((error) => {
                alert("请求失败:" + error)
            })
        },

        /**
         * 文件上传完毕后会触发after-read回调函数
         */
        afterRead(file){
            // 大于1.5MB的jpeg和png图片都缩小像素上传
            if(/\/(?:jpeg|png)/i.test(file.file.type) && file.file.size > 1500000) {
                console.log(file.file.size)
                let canvas =  document.createElement('canvas')        // 创建Canvas对象(画布)
                let context = canvas.getContext('2d') 
                let img = new Image()                   // 创建新的图片对象 
                // 指定图片的DataURL(图片的base64编码数据)
                img.src = file.content
                // 监听浏览器加载图片完成，然后进行进行绘制
                // img.onload = () => {
                //     // 指定canvas画布大小，该大小为最后生成图片的大小
                //     canvas.width = 400
                //     canvas.height = 300
                //     /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
                //     如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/ 
                //     context.drawImage(img, 0, 0, 400, 300)
                //     // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
                //     file.content = canvas.toDataURL(file.file.type, 0.92) 
                // }                       
            }
        },

        /**
         * 提交
         */
        submitClick(){
            var fileObj = this.fileList[0];

            if(fileObj == '' || typeof(fileObj) == 'undefined'){
                return this.$toast('亲,还没有选择上传的凭证哦!')
            }else{
                fileObj = this.fileList[0].content;
            }

            var url = 'pay/investmentsub';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                level_id:this.level_id,
                image:fileObj
            }).then((res) => {
                if(res.data.status == 200){
                    this.$toast({message:res.data.msg,duration:2000})
                    setTimeout(() => {
                        this.$router.replace('/Investment')
                    },2000)
                }else if(res.data.status == 999){
                    this.$store.commit('del_token'); //清除token
                    setTimeout(()=>{
                        this.$router.push('/Login')
                    },1000)
                }
                else{
                    this.$toast(res.data.msg)
                }
            }).catch((error) => {
                alert('请求错误:' + error)
            })
            
        },

     
    },
   
}
</script>

<style lang="stylus" scoped>
.Purchase
    & /deep/ .TopHeader
        color #ffffff
        background linear-gradient(to right,#00dafd 0%,#00a9ff 100%)
    .content  
        margin-top 40px  
        padding 0 24px
        box-sizing border-box
        .purchase-item
            width 100%
            height 100px
            font-size 30px
            background-color #fff
            border-radius 10px
            margin-bottom 20px
            padding 0 20px
            box-sizing border-box
            display flex
            align-items center
            .sub-title
                flex 1
            .check
                input 
                    width 50px
                    height 50px
                    border 1px solid #ebebeb
                    box-shadow 0 0 5px #ebebeb
                    appearance none
                    outline none
                input:checked:after
                    width 52px
                    height 52px
                    content ''
                    display block
                    background url("/static/images/investment/selected.png") no-repeat
                    background-size 100%
                    border none
                    box-shadow none
        .uploader
            width 100%
            height 400px
            background-color #fff
            display flex
            flex-direction column
            justify-content center
            align-items center
            .van-uploader /deep/ .van-uploader__upload
                border 3px dashed #e5e5e5
                .van-icon
                    width 45px
                    height 40px
                    background url("/static/images/investment/camera-icon.png") no-repeat
                    background-size 45px 40px
                .van-icon-plus:before
                    display none
            .van-uploader /deep/ .van-uploader__upload
                margin 0
            .van-uploader /deep/ .van-uploader__preview
                 margin 0
            .van-uploader /deep/ .van-uploader__preview-image
                width auto
                height auto
                max-width 558px
                max-height 250px
                overflow hidden
            .vouchers
                font-size 24px
                color #151515
                margin-top 15px
        .confirm-btn
            width 92%
            height 88px
            font-size 30px
            color #ffffff
            background linear-gradient(to right,#00dafd 0%,#00a9ff 100%)
            text-align center
            line-height 88px
            border-radius 40px
            position fixed
            left 50%
            margin-left -46%
            bottom 30px
             
</style>
