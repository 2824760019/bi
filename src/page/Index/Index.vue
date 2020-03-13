<template>
  <div style="background: #eee">
<!--    头部-->
    <div class="header">
       <img src="../../assets/imags/logo1.png">
      <ul>
        <li @click="store">
          <img src="../../assets/imags/shangcheng.png" height="25px">
          <p>商城</p>
        </li>

        <li @click="setMaskShow" style="margin-top: 15px">
          <img src="../../assets/imags/caidan.png" height="15px" style="margin-bottom: 5px">
          <p>菜单</p>
        </li>
      </ul>
    </div>
<!--    轮播-->
<!--    大屏幕的-->
    <div class="lunbo visible-md visible-lg">
      <el-carousel height="400px" arrow="never">
     <!--   <el-carousel-item>-->
           <div class="block">
             <el-carousel height="300px" width="100%">
                <el-carousel-item v-for="item in 2" :key="item">
                </el-carousel-item>
             </el-carousel>
            </div>
      <!--  </el-carousel-item> -->
      </el-carousel>
    </div>
<!--    小屏幕的-->
        <div class="lunbo visible-xs">
          <el-carousel height="200px" arrow="never">
           <!-- <el-carousel-item> -->
               <div class="block">
                  <el-carousel height="300px" width="100%">
                      <el-carousel-item v-for="item in 2" :key="item">
                      </el-carousel-item>
                  </el-carousel>
               </div>
          <!--  </el-carousel-item> -->
          </el-carousel>
        </div>
<!--底部新闻轮播-->
         <div class="new"  @click="morenew">
            <img src="../../assets/imags/lb.png" height="20px">
<!--           当使用swipe轮播的时候无法实现循环轮播就给盒子设置一个v-if判断当有这个数据就循环-->
            <div class="new_pro">
              <swiper :options="swiperOption" style="height: 30px"  ref="mySwiper">
                <swiper-slide  id="neir">
                 欢迎光临，查看最新消息。
                </swiper-slide>
                 <swiper-slide  id="neir">
                 开创体育最新消息！
                </swiper-slide> 
                <swiper-slide  id="neir">
                 最新活动开始了！
                </swiper-slide>
              </swiper>
            </div>
           <p>查看更多</p>
         </div>

<!--      最新赛事-->
         <div class="new_competition">
           <div class="competition_title">
           <img src="../../assets/imags/line.png">
           <h1>最新赛事</h1>
           <img src="../../assets/imags/line.png">
           </div>
           <ul class="competition_pro">
             <li @click="saishi">
               <img src="../../assets/imags/zu2.jpg">
               <p>足球赛事</p>
               <span>奔跑的球员，努力的拼搏</span>
             </li>
              <li @click="saishi">
               <img src="../../assets/imags/zu1.jpg">
               <p>加油足球！</p>
               <span>奔跑的球员，努力的拼搏</span>
             </li>
              <li @click="malasong">
               <img src="../../assets/imags/mala.jpg">
               <p>马拉松比赛</p>
               <span>安全第一，友谊第二</span>
             </li>        
           </ul>
           <h2>
             <router-link to="/solution?mes=最新赛事" style="color: #cccccc">查看更多>></router-link>
           </h2>
         </div>
<!--    最新活动开始-->
    <div class="new_competition">
      <div class="competition_title">
        <img src="../../assets/imags/line.png">
        <h1 style="color:#ef9225">最新活动</h1>
        <img src="../../assets/imags/line.png">
      </div>
      <ul class="competition_pro">
        <li @click="huodong">
                <img src="../../assets/imags/miaozu.jpg">
                <p>苗家团建活动</p>
                <span>欢迎大家一起来参与</span>
        </li>
         <li @click="huodong">
                <img src="../../assets/imags/miaozhai2.jpg">
                <p>苗家团建活动</p>
                <span>欢迎大家一起来参与</span>
        </li>
          <li @click="huodong">
                <img src="../../assets/imags/miaozhai1.jpg">
                <p>苗家团建活动</p>
                <span>欢迎大家一起来参与</span>
        </li>
      </ul>
      <h2><router-link to="/solution?mes=最新活动" style="color: #cccccc">查看更多>></router-link></h2>
    </div>
<!--    旅行信息-->
    <div class="new_competition" >
      <div class="competition_title">
        <img src="../../assets/imags/line.png">
        <h1 style="color:#4d25a0">旅行信息</h1>
        <img src="../../assets/imags/line.png">
      </div>
      <ul class="competition_pro">
        <li @click="lveyou">
            <img src="../../assets/imags/miaozu.jpg">
            <p>西江千户苗族二日游</p>
             <span>欢迎大家一起来参与</span>
        </li>
      </ul>
      <h2><router-link to="/solution?mes=旅行信息" style="color: #cccccc">查看更多>></router-link></h2>
    </div>


<!--底部-->
    <div class="footer">
      <div>
        <p>有任何建议请联系我们:111111111</p>
        <p>开创体育所有：&copy1997-2020</p>
      </div>
    </div>

<!--    弹窗-->
    <div class="father">
      <div class="mask" v-show="maskShow" @click="setMaskShow"></div>
      <div class="child" id="child" v-show="maskShow">
<!--        <button @click="setMaskShow">关闭</button>-->
        <div class="headers">
          <ul>
            <li  @click="changeli(index,item)" v-for="(item,index) in menuList">
              <!-- 在这里打印出boll值方便查看 -->
<!--              一级菜单-->
              <div class="biaoti" @click="dianji(item,index)">
                <p id="yanse">
                  <img v-if="item.show == true":src="item.menu_img">
                  <img v-if="item.show == false" :src="item.menu_img_c">
                  <span v-if="item.show == false" style="color: #000000">{{item.menu_name}}</span>
                  <span v-if="item.show == true" style="color: #5576df">{{item.menu_name}}</span>
                </p>
                <img v-if="item.show == false" src="../../assets/imags/yb.png" height="15px" >
                <img v-if="item.show == true" src="../../assets/imags/sb.png" height="8px" width="12px">
              </div>
             <!--二级菜单-->
              <ul v-show="item.show"  v-if="item.subMenu">
                <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
                <li v-for="(a,index) in item.subMenu" v-on:click.stop="doThis(index,a)" style="border: 1px solid #eeeeee;padding-left: 46px">{{a.menu_name}}
<!--                 循环三级菜单-->
                  <ul  v-if="a.subMenus" style="border: 1px solid #eeeeee;margin-left: -47px !important;">
                    <li v-for="(item3,index) in a.subMenus" style="border-top: 1px solid #eeeeee;padding-left: 70px;font-size: 12px;color: #666666">{{item3.menu_name}}</li>
                  </ul>
                </li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    弹出模态框-->
    <div :class="isshow ?'modelpro':'hiddenpro'" @click="hiddenit1">
      <div>
        <p class="title_sub">提示</p>
        <p class="sub_pro">待开放</p>
      </div>
    </div>
  </div>
</template>
<script>
  // import Header from '../../components/Header'
  // import banner from '../../components/banner'
  // import Footer from '../../components/Footer'
  // import commons from '../../components/commons'
  var qs = require('qs');
  export default {
    filters: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 13) {
          return value.slice(0,13) + '...'
        }
        return value
      }
    },
    data(){
      return{
        isshow:false,
        maskShow: false,
        list:[],
        bannerlist:[],
        // 新闻
        newlist:[],
        // 菜单列表
       menuList: [
          {
            "menu_id": "117",
            "menu_name": "比赛",  //名称
            "menu_url": "#",      //打开的连接，#代表目录，非#号代码页面(到时候你把页面地址给我)
            "parent_id": "0",
            "menu_order": "1",   //排序
            "menu_icon": "menu-icon fa fa-leaf black",
            "menu_type": "2",
            "menu_state": null,
            "menu_img":require("../../assets/imags/jb.png"),  //一级菜单的LOGO
           "menu_img_c":require("../../assets/imags/jb01.png"),
            "menu_source": "0",
            "show":false,
            "subMenu": [//二级菜单
              {
                "menu_id": "125",
                "menu_name": "官方比赛",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              },
              {
                "menu_id": "125",
                "menu_name": "非官方比赛",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              }]
          },
           {
            "menu_id": "117",
            "menu_name": "青少年活动",  //名称
            "menu_url": "#",      //打开的连接，#代表目录，非#号代码页面(到时候你把页面地址给我)
            "parent_id": "0",
            "menu_order": "1",   //排序
            "menu_icon": "menu-icon fa fa-leaf black",
            "menu_type": "2",
            "menu_state": null,
            "menu_img":require("../../assets/imags/hd.png"),  //一级菜单的LOGO
           "menu_img_c":require("../../assets/imags/hd01.png"),
            "menu_source": "0",
            "show":false,
            "subMenu": [//二级菜单
              {
                "menu_id": "125",
                "menu_name": "年轻人的活动",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              },
              {
                "menu_id": "125",
                "menu_name": "老年人的活动",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              }]
          },
           {
            "menu_id": "117",
            "menu_name": "比赛",  //名称
            "menu_url": "#",      //打开的连接，#代表目录，非#号代码页面(到时候你把页面地址给我)
            "parent_id": "0",
            "menu_order": "1",   //排序
            "menu_icon": "menu-icon fa fa-leaf black",
            "menu_type": "2",
            "menu_state": null,
            "menu_img":require("../../assets/imags/cd.png"),  //一级菜单的LOGO
           "menu_img_c":require("../../assets/imags/cd01.png"),
            "menu_source": "0",
            "show":false,
            "subMenu": [//二级菜单
              {
                "menu_id": "125",
                "menu_name": "官方比赛",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              },
              {
                "menu_id": "125",
                "menu_name": "非官方比赛",
                "menu_url": "html",
                "parent_id": "117",
                "menu_order": "1",
                "menu_icon": "menu-icon fa fa-leaf black",
                "menu_type": "1",
                "menu_state": null,
                "menu_img": "",
                "menu_source": "0",
                "subMenu": null
              }]
          }],
         // 最新赛事
        eventList:[],
         // 最新活动
        activityList:[],
        // 旅行信息
        travelList:[],
        // 轮播图片控制
        swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          loop:true,
          autoHeight:true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false
          },
          direction:'vertical',
        },
      }
    },
    created(){

    },
    methods:{
      // 点击商城
      store(){
        // this.isshow = true
        this.$router.push({path: '/shangcheng'})
        this.maskShow = false
        // let msg = new SpeechSynthesisUtterance("商城待未开发，敬请期待");
        // window.speechSynthesis.speak(msg);
      },
      hiddenit1(){
        this.isshow = false
        this.maskShow = false;
      },

      // 点击查看比赛详情
      saishi(){
        this.$router.push({path: '/saishi'})
      },
      malasong(){
         this.$router.push({path: '/malasong'})
      },
      // 查看活动的    
      huodong(){
         this.$router.push({path: '/huodong'})
     },
      // 旅行信息详情
     lveyou(){
         this.$router.push({path: '/lveyou'})
     },
      // 消息中心查看更多
      morenew(){
        this.$router.push({path: '/newscenter'})
      },
      setMaskShow(){
        this.maskShow = !this.maskShow;
      },
      hiddnit(){
        this.maskShow = !this.maskShow;
      },
// 一级菜单的判断显示
      changeli: function(ind, item) {
        this.menuList.forEach(i => {
          if (i.show !== this.menuList[ind].show) {
            i.show = false;
          };
        });

        item.show = !item.show;
        if(item.show == false){
          document.getElementById('yanse').style.color='#000'
        }
      },


      dianji(item,index){
        console.log(index)
        console.log(item)

      },
      doThis: function(index,a) {
       // console.log(index)
       //  console.log(a)
        // a.show = !a.show
       var mes = a.menu_name
        var mes_url = a.menu_url
        var is = 2
        if(is==1){
          this.$router.push({path: 'Login/'})
        }else if(is==2) {
          this.$router.push({
            path: 'product/',
            query: {
              mes:mes,
              mes_url:mes_url
            }
          })
        }else {
          console.log('不跳')
        }


      },



    },
    mounted(){
      var that = this
      console.log('请求的数据')
      //swiper向上轮播的请求的接口
      this.utils.getData('/kaichuang-app'+this.ports.manage.index, {}, () => {
        console.log('请求失败')
      }, (res) => {
        console.log(res)
        this.bannerlist = res.bannerlist
        this.newlist = res.newslist
        this.eventList= res.eventList
        this.activityList = res.activityList
        this.travelList = res.travelList
        var onlist = res.menuList
        onlist.forEach(item => {
          this.$set(item, 'show', false)
          for(var i = 0;i<item.subMenu.length;i++){
            this.$set(item.subMenu[i], 'show', false)
          }
        })
        // console.log('新的菜单列表')
        // console.log(onlist)
        this.menuList = onlist
 });

     
    },

  }
</script>

<style scoped lang="scss">
  .block{
    width: 100%;
    height:100%;
  }
  .el-carousel--horizontal {
     overflow-x: visible;
  }
  .el-carousel__item:nth-child(2n) {
    background-image: url("../../assets/imags/miaozu.jpg");
    background-size: 100%  100%;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../assets/imags/zu1.jpg");
    background-size: 100%  100%;
  }
  .header{
    width: 100%;
    height: 2.76%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    >img{
      margin-left: 10px;
      height: 25px;
    }
    >ul{
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media screen and (max-width: 500px) {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      >li{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin-top: 10px;
        >p{
          color: #5d7ce0;
        }
      }
    }
  }

  .lunbo{
    width: 100%;
    height:9.29%;

  }

  /*新闻轮播*/
  .new{
    width: 100%;
    height: 33px;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    .new_pro{
      width:90%;
      height: 100%;
      text-overflow:ellipsis;
      @media screen and (max-width: 500px) {
        width:70%;
        height: 100%;
        /*background: red;*/
        /*text-overflow:ellipsis;*/
      }
      #neir{
        width: 100%;
        height: 100%;
        /*background: pink;*/
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 13px;
        padding-top: 8px;

      }
    }
    >p{
      font-family:PingFang SC;
      font-weight:400;
      line-height:42px;
      color:rgba(153,153,153,1);
    }
  }

  /*最新赛事*/
  .new_competition{
    width: 100%;
    /*height: 428px;*/
    /*height: 1000px;*/
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .competition_title{
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      >img{
        height:100%;
        width:44%;
        @media screen and (max-width: 500px) {
          height:100%;
          width:30%;
      }
      }
      >h1{
        color: #5576df;
      }
    }
    .competition_pro{
      width: 100%;
      /*height:340px;*/
      /*height:900px;*/
      /*background: orange;*/
      padding: 10px;
      display: flex;
      /*justify-content: space-between;*/
      flex-wrap: wrap;
      @media screen and (max-width: 500px) {
        width: 100%;
        /*height:340px;*/
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
        margin-bottom: 10px;
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
          margin-bottom: 10px;
          margin-left: 4px;
        }

        >img{
          width: 100%;
        }
        >p{
          width: 93%;
          height: 40px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: pre-wrap;
          font-size: 13px;
          font-family:PingFang SC;
          font-weight:400;
          line-height:33px;
          color:rgba(51,51,51,1);
          margin-top: -10px;
          @media screen and (max-width: 500px) {
            width: 85%;
            height: 40px;
            overflow: hidden;
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
          margin-left: 10px;
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
    >h2{
      font-size:15px;
      font-family:PingFang SC;
      /*font-weight:bold;*/
      line-height:40px;
      color:#CCCCCC !important;
    }
  }


  /*底部*/
.footer{
  width: 100%;
  height: 80px;
  padding: 10px;
  background: #ffffff;
  >div{
    width: 100%;
    height: 100%;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    >p{
      font-size: 13px;
      font-family:PingFang SC;
      font-weight:bold;
      line-height:25px;
      color:rgba(204,204,204,1);
    }
  }
}


  .father{
    width: 100%;
    height: 100%;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 60px;
    left: 0;
    background: #000;
    opacity: 0.6;
  }
  .child{
    position: absolute;
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
    top: 50px;
    left:0;
    background: #ffffff;
    z-index: 999;
    .headers{
      width: 100%;
      color: #ffffff;
      >ul{
        width: 100%;
        >li{
          background: #ffffff;
          width: 100%;
          line-height:50px;
          border: 1px solid #eeeeee;
          cursor: pointer;
          color: #333333;
          font-size: 15px;
          &:hover {
            color: #5576DF;
          }
          .biaoti{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >p>img{
              margin-right: 10px;
              margin-left: 10px;
            }
            >img{
              margin-right: 10px;
              margin-top: 5px;
            }
          }
          >ul {
            width: 100%;
            li{
              /*padding-left: 30px;*/
              font-size:15px;
              font-family:PingFang SC;
              font-weight:400;
              line-height:45px;
              color:rgba(102,102,102,1);
              /*border: 1px solid #eeeeee;*/

            }
          }
        }
      }
      /*.active {*/
      /*  background-color:#ff;*/
      /*}*/
    }
  }

  /*弹出的模态框*/
  .modelpro{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    >div{
      margin: 200px auto;
      width: 50%;
      height: 120px;
      border-radius: 5px;
      background: #ffffff;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title_sub{
        width: 100%;
        height: 40px;
        text-align: center;
        font-size:20px;
        font-family:PingFang SC;
        font-weight:400;
        color: #5576DF;
        border-bottom: 1px solid #ccc;
      }
      .sub_pro{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size:16px;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
      }
    }
  }
  .hiddenpro{
    width: 100%;
    height: 100%;
    background: #333333;
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: none;
  }

</style>
