<template>
  <div>
<!--    头部-->
    <div class="header">

       <img src="../../assets/imags/tui.png" @click="back">

        <h1>{{titles}}</h1>
      <p @click="singUp"></p>
    </div>
<!--    大图-->
    <div class="bannerpic">
      <div class="pic_content" @click="detailstop($event)" v-if="topParm.id">
        <img :src="ports.kcimgurl+topParm.img_url" width="100%" height="100%" >
        <p >{{topParm.note}}</p>
      </div>

      <!--    内容-->
      <ul class="pro_list"  v-for="(item,index) in sportlist" :key="index">

        <li @click="details(item,index)">
          <div class="left_pro">
            <p style="font-size:15px;font-family:HYZhongJianHeiJ;font-weight:400;color:rgba(51,51,51,1);height: 30px">{{item.title}}</p>
            <p style="font-size:13px;font-family:HYZhongJianHeiJ;font-weight:400;color:rgba(102,102,102,1);">{{item.note | ellipsis}}</p>
            <p style="font-size:12px;font-family:HYZhongJianHeiJ;font-weight:400;color:rgba(153,153,153,1);">{{item.create_time | dateFmt('YYYY.MM.DD')}}</p>
          </div>
          <div class="right_pro">
            <img  :src="ports.kcimgurl+item.img_url" width="100%" height="100%">
          </div>
        </li>

      </ul>
    </div>

    <!--底部-->
<!--    <div class="footer">-->
<!--      <div>-->
<!--        <p>有任何建议请联系我们 1111111111</p>-->
<!--        <p>开创体育网版权所有：&copy1997-2018</p>-->
<!--      </div>-->
<!--    </div>-->
    <!--  加载框-->
    <div :class="jia==true?'jia':'nojia'">
      <img src="../../assets/imags/loading.gif" alt="">
      <p>加载中...</p>
    </div>

  </div>
</template>

<script>
  var qs = require('qs');
  export default {
    name: "",
    filters: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 18) {
          return value.slice(0,18) + '...'
        }
        return value
      }
    },
    data(){
      return{
// 标题
    titles:''  ,
// 运动信息列表
        sportlist:[],
        topParm:'',
        // 页码
        currentPage:1,
        totalPage:'',
        // 加载中
        jia:false,
        timer:''
      }
    },
    created(){

    },
    methods: {
      // 返回
      back(){
        this.$router.push({path: '/index',query: {mesisshow:'isshow'}})
      },
      detailstop(e){
        console.log('跳转到详情')
        console.log(this.$route.query);
        var mes = this.$route.query.mes
        console.log(this.topParm);
        var toppro = this.topParm
        if(mes=='官方比赛' || mes=='非官方比赛'){
          var   stype = 1
        }else if(mes=='青少年活动' || mes=='成人活动'){
          var  stype = 2
        }else if(mes=='跟团旅行' || mes=='定制旅行'){
          var stype = 3
        }else if(mes=='初始培训' || mes=='专业培训'){
          var  stype = 4
        }else if(mes=='各项目演出'){
          var stype = 5
        }else if(mes=='RC模型运动' || mes=='滑板运动' || mes=='滑轮运动' || mes=='骑行运动'|| mes=='摩托车运动' || mes=='武术健身' || mes=='攀岩运动' || mes=='真人CS' || mes=='射击运动'){
          var stype = 6
        }else if(mes=='贵州省' || mes=='其他省'){
          var stype = 7
        }else if(mes=='公司简介' || mes=='会员入会'){
          var stype = 8
        }

        var content = toppro
        var projectID = toppro.id
        // this.projectID = projectID
        this.utils.postData('/kaichuang-app'+this.ports.manage.toread, qs.stringify({id:projectID,stype:stype}), () => {
          console.log('请求失败')
        }, (res) => {
          console.log(res)
          this.$router.push({path: '/Deatils',query: {mes:content}})
        });

      },
      // 比赛详情
      details(item,index) {
        console.log('跳转到详情')
        console.log(this.$route.query);
        var mes = this.$route.query.mes

        if(mes=='官方比赛' || mes=='非官方比赛'){
         var   stype = 1
        }else if(mes=='青少年活动' || mes=='成人活动'){
         var  stype = 2
        }else if(mes=='跟团旅行' || mes=='定制旅行'){
         var stype = 3
        }else if(mes=='初始培训' || mes=='专业培训'){
          var  stype = 4
        }else if(mes=='各项目演出'){
          var stype = 5
        }else if(mes=='RC模型运动' || mes=='滑板运动' || mes=='滑轮运动' || mes=='骑行运动'|| mes=='摩托车运动' || mes=='武术健身' || mes=='攀岩运动' || mes=='真人CS' || mes=='射击运动'){
          var stype = 6
        }else if(mes=='贵州省' || mes=='其他省'){
          var stype = 7
        }else if(mes=='公司简介' || mes=='会员入会'){
          var stype = 8
        }
        console.log(item)
        var content = item
        var projectID = item.id
        // this.projectID = projectID
        this.utils.postData('/kaichuang-app'+this.ports.manage.toread, qs.stringify({id:projectID,stype:stype}), () => {
          console.log('请求失败')
        }, (res) => {
          console.log(res)
          this.$router.push({path: '/Deatils',query: {mes:content}})
        });
      },
      // 报名参加
      singUp(){
        console.log('报名')
        console.log(this.$route.query);
        var mes = this.$route.query.mes
        var stype= ''
        if(mes=='官方比赛' || mes=='非官方比赛'){
          stype = 1
        }else if(mes=='青少年活动' || mes=='成人活动'){
          stype = 2
        }else if(mes=='跟团旅行' || mes=='定制旅行'){
          stype = 3
        }else if(mes=='初始培训' || mes=='专业培训'){
          stype = 4
        }
        this.$router.push({path: '/signUp',query:{stype:stype,mes:mes}})
      },



      // 获取滚动条当前的位置
      getScrollTop() {
        let scrollTop = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        return scrollTop
      },
      // 获取当前可视范围的高度
      getClientHeight() {
        let clientHeight = 0
        if (document.body.clientHeight && document.documentElement.clientHeight) {
          clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
        } else {
          clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
        }
        return clientHeight
      },

      // 获取文档完整的高度
      getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      },
      // 滚动事件触发下拉加载
      onScroll() {
        // console.log(this.$route.query);
        var _this = this
        var totalpage = this.totalPage
        var mes = this.$route.query.mes
        console.log(mes)
        var  currentPage = this.currentPage
        if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 0) {
          currentPage ++
          this. currentPage = currentPage
          console.log('最新的页码')
          console.log(currentPage)
          this.jia = true
          if(currentPage>totalpage){
            console.log('已经没有数据了')
            this.jia = false
          }else {

            var mes_url = this.$route.query.mes_url
            console.log(mes_url.indexOf("?") != -1 );
            var have = mes_url.indexOf("?") != -1

            if(have==true){
              console.log('这是有？的操作')
              var can = "&showCount=20&currentPage="+currentPage
            }else {
              console.log('这是没有？的操作')
              var can = "?showCount=20&currentPage="+currentPage
            }

            _this.timer =setTimeout(function () {
              _this.utils.getData('/kaichuang-app'+mes_url+can, qs.stringify({}), () => {
                console.log('请求失败')
              }, (res) => {
                var neslist = res.list
                for (var i=0;i<neslist.length;i++) {
                  _this.sportlist.push(neslist[i])
                }
                _this.jia = false
              });

            }, 1000)

          }

        }
      },

    },
    mounted(){
      console.log(this.$route.query);
      var mes = this.$route.query.mes
      var mes_url = this.$route.query.mes_url
      console.log(mes_url.indexOf("?") != -1 );
      var have = mes_url.indexOf("?") != -1

      if(have==true){
        console.log('这是有？的操作')
        var can = "&showCount=20&currentPage=1"
      }else {
        console.log('这是没有？的操作')
        var can = "?showCount=20&currentPage=1"
      }
      this.titles = mes
      this.utils.getData('/kaichuang-app'+ mes_url+can, {}, () => {
        console.log('请求失败')
      }, (res) => {
        console.log(res)
        this.topParm = res.topParm
        this.sportlist = res.list,
          this.totalPage = res.page.totalPage
      });

      this.$nextTick(function () { // 解决视图渲染，数据未更新
        window.addEventListener('scroll', this.onScroll);
      })

    },
    components:{

    }
  }
</script>

<style scoped lang="scss">
  /*头部标题*/
.header{
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #f1f4f6;
  >h1{
    width: 50%;
    text-align: center;
    font-size:18px;
    font-weight:400;
    color:#8c8c8c;
  }
  >p{
    font-size:15px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(85,118,223,1);
    opacity:0.9;

  }
}
  /*大图*/
  .bannerpic{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    .pic_content{
      width: 90%;
      /*height: 128px;*/
      position: relative;
      margin-top: 10px;
      margin-bottom: 10px;
      >p{
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgba(0,0,0,0.5);
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 15px;
        color:rgba(255,255,255,1);
      }
    }

    /*内容*/
    .pro_list{
      width: 90%;
      height: 99px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      >li{
        list-style: none;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #F2F2F2;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
        .left_pro{
          width:68% ;
          height: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          >p{
            width: 93%;
            height: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 15px;
            color:rgba(255,255,255,1);
          }
        }
        .right_pro{
          width:30% ;
          height: 90%;
        }
      }
    }
  }

  /*底部*/
  .footer{
    width: 100%;
    height: 80px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      width: 90%;
      height: 100%;
      border-top: 1px solid #f1f1f1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      >p{
        font-size: 10px;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:25px;
        color:rgba(204,204,204,1);
      }
    }
  }
  /*加载框*/
  .jia{
    width: 100%;
    height: 20px;
    /*background: #cccccc;*/
    position:fixed;
    left: 0;
    bottom: 0;
    z-index: 99999;
    margin-top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    >img{
      height: 20px;
    }
    >p{
      color: #cccccc;
      font-size: 12px;
    }
  }
  .nojia{
    display: none;
  }
</style>
