<template>
    <div>
      <!--    头部-->
      <div class="header">
          <img src="../../assets/imags/tui.png" @click="back">
        <h1>{{mes}}</h1>
        <p></p>
      </div>

<!--      内容-->
      <div class="content">
        <div>
          <!--tab切换部分-->
          <ul class="tablist">
            <li v-for="(item,index) in tablist" :key="index" @click="tabit(index,item)" :class="activate ==index?'dian':''">{{item.title}}</li>
          </ul>
<!--          tab切换内容-->
          <div class="tabpro">
            <ul class="competition_pro">
              <li v-for="(item,index) in sportlist" :key="index"  @click="look(index,item)">
                <img src="../../assets/imags/zu.jpg">
                <p>{{item.title| ellipsis}}</p>
                <span>{{item.create_time | dateFmt('YYYY.MM.DD')}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--底部-->
<!--      <div class="footer">-->
<!--        <div>-->
<!--          <p>有任何建议请联系我们：01111111111</p>-->
<!--          <p>开创体育网版权所有：&copy1997-2018</p>-->
<!--        </div>-->
<!--      </div>-->

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
        name: "solution",
      filters: {
        ellipsis (value) {
          if (!value) return ''
          if (value.length > 12) {
            return value.slice(0,12) + '...'
          }
          return value
        }
      },
      data(){
          return{
           // tab标题
            mes:'',
            tablist:[{id:0,title:'官方比赛'},{id:1,title:'非官方比赛'}],
            sportlist:[],
            activate:0,
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
      methods:{
        // 返回
        back(){
          this.$router.push({path: '/index'})
        },
        tabit(index,item){
          console.log(this.$route.query);
          var mes = this.$route.query.mes
          console.log(item)
          console.log(index)
          this.activate = index
          this.currentPage = 1
          var tab = this.activate
          console.log(tab)
          if(mes == '最新赛事'){
            if(tab == 0){

              console.log('这是官方比赛')
              this.utils.getData('/kaichuang-app'+this.ports.manage.gfList+'?showCount=20&currentPage=1', {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }else {
              console.log('这是非官方比赛')
              this.utils.getData('/kaichuang-app'+this.ports.manage.fgfList, {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }
          }else if(mes == '最新活动'){
            console.log('这是最新活动')
            if(tab == 0){

              console.log('这是青少年活动')
              this.utils.getData('/kaichuang-app'+this.ports.manage.qsnist, {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }else {
              console.log('这是成年活动')
              this.utils.getData('/kaichuang-app'+this.ports.manage.cnist, {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }
          }else if(mes == '旅行信息'){
            console.log('这是最新旅行')
            if(tab == 0){

              console.log('这是跟团')
              this.utils.getData('/kaichuang-app'+this.ports.manage.gtlx, {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }else {
              console.log('这是定制旅行')
              this.utils.getData('/kaichuang-app'+this.ports.manage.dzlx, {}, () => {
                console.log('请求失败')
              }, (res) => {
                console.log(res)
                this.sportlist = res.list
              });
            }
          }

        },
        // 内容详情
        look(index,item){
          var content = item
          this.$router.push({path: '/Deatils',query: {mes:content}})
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
          var showCount = 20
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
              if(mes=='最新赛事'){
                _this.timer =setTimeout(function () {
                  _this.utils.getData('/kaichuang-app'+_this.ports.manage.gfList+'?showCount='+showCount+'&currentPage='+currentPage, qs.stringify({}), () => {
                    console.log('请求失败')
                  }, (res) => {
                    var neslist = res.list
                    for (var i=0;i<neslist.length;i++) {
                      _this.sportlist.push(neslist[i])
                    }
                    _this.jia = false
                  });

                }, 1000)


              }else if(mes=='最新活动'){
                _this.timer =setTimeout(function () {
                  _this.utils.getData('/kaichuang-app'+_this.ports.manage.qsnist+'?showCount='+showCount+'&currentPage='+currentPage, qs.stringify({}), () => {
                    console.log('请求失败')
                  }, (res) => {
                    var neslist = res.list
                    for (var i=0;i<neslist.length;i++) {
                      _this.sportlist.push(neslist[i])
                    }
                    _this.jia = false
                  });

                }, 1000)


              }else if(mes=='旅行信息'){

                _this.timer =setTimeout(function () {
                  _this.utils.getData('/kaichuang-app'+_this.ports.manage.gtlx+'?showCount='+showCount+'&currentPage='+currentPage, qs.stringify({}), () => {
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


          }
        },

      },
      mounted(){
        console.log(this.$route.query);
        var mes = this.$route.query.mes
        this.mes = mes
        var showCount = 20
        var currentPage = this.currentPage
        // 比赛的
        if(mes=='最新赛事'){
          this.mes = '全部赛事'
           this.sportlist = [{
           img_url:require('../../assets/imags/malasong2.jpg'),
            title:'青少年马拉松',
            create_time:'2018.01.02'
          }]  
        }else if(mes=='最新活动'){
          this.mes = '全部活动'
            this.sportlist = [{
           img_url:require('../../assets/imags/malasong2.jpg'),
            title:'组团活动',
            create_time:'2019.01.02'
          }]  
        this.tablist=[{id:0,title:'青少年活动'},{id:1,title:'成年活动'}]

        }else if(mes=='旅行信息'){
          this.sportlist = [{
           img_url:require('../../assets/imags/miaozhai2.jpg'),
            title:'苗族旅行',
            create_time:'2019.01.02'
          }]  
          this.tablist=[{id:0,title:'跟团旅行'},{id:1,title:'定制旅行'}]

        }

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
      color:#333333;
    }
    >p{
      font-size:15px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(85,118,223,1);
      opacity:0.9;

    }
  }
  /*内容部分*/
  .content{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    >div {
      width: 95%;
      margin-top: 10px;
      .tablist  {
          width: 100%;
          height: 30px;
          display: flex;
          border:1px solid rgba(102,102,102,1);
          justify-content: space-between;
          align-items: center;
        overflow: hidden;
        border-radius: 5px;
          >li{
            width: 50%;
            height: 100%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
          }
        .dian{
          background: #5576DF;
          color: #ffffff;
        ;
        }
        }

      /*tab内容*/
      .competition_pro{
        width: 100%;
        /*height:340px;*/
        /*height:900px;*/
        padding: 10px;
        display: flex;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
        @media screen and (max-width: 500px) {
          width: 100%;
          /*height:340px;*/
          /*background: orange;*/
          padding: 10px;
          display: flex;
          /*justify-content: space-between;*/
          flex-wrap: wrap;
        }
        >li{
          width: 32%;
          height: 420px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          background:rgba(255,255,255,1);
          box-shadow:0px 3px 6px rgba(85,118,223,0.2);
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          margin-top: 10px;
          margin-left: 14px;
          @media screen and (max-width: 500px) {
            width: 32%;
            height: 150px;
            border-radius: 5px;
            border: 1px solid #cccccc;
            background:rgba(255,255,255,1);
            box-shadow:0px 3px 6px rgba(85,118,223,0.2);
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            margin-top: 5px;
            margin-left: 4px;
          }

          >img{
            width: 100%;
          }
          >p{
            width: 93%;
            height: 40px;
            font-size: 15px;
            font-family:PingFang SC;
            font-weight:400;
            line-height:33px;
            color:rgba(51,51,51,1);
            margin-top: -10px;
            @media screen and (max-width: 500px) {
              width: 85%;
              height: 40px;
              font-size: 12px;
              font-family:PingFang SC;
              font-weight:400;
              line-height:18px;
              color:rgba(51,51,51,1);
              margin-top: -10px;
            }
          }
          >span{
            display: flex;
            align-self: flex-start;
            font-family:PingFang SC;
            font-weight:400;
            line-height:25px;
            color:rgba(153,153,153,1);
            margin-left: 20px;
            @media screen and (max-width: 500px) {
              font-family:PingFang SC;
              font-weight:400;
              line-height:25px;
              color:rgba(153,153,153,1);
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  /*底部*/
  .footer{
    width: 100%;
    height: 80px;
    padding-top:15px;
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
