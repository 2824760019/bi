<template>
 <div>
   <!--    头部-->
   <div class="header">
       <img src="../../assets/imags/tui.png"  @click="back">
     <h1>消息中心</h1>
     <p></p>
   </div>

   <!--    整体内容-->
   <div class="main_pro">
     <div class="content" v-for="(item,index) in newslist" :key="index">
       <div class="news" @click="news(item,index)">
         <div>
           <div class="new_title">
             <p style=" width: 73%;height: 20px;font-family:PingFang SC;font-weight:800;font-size:15px;color:rgba(51,51,51,1); overflow: hidden;text-overflow:ellipsis; white-space: nowrap;">
              以当下的情况来看，国内体育活动数量较少，相关经济活动的内里构造也不科学。
             比如其健身娱乐、服务、培训、保健等行业发展虽然已经有了较大进步，但仍远远跟不上相关广告、
             </p>
           </div>
           <p class="new_pro">
             现下世界各地体育事业及其产业的发展多数是依托以高质量的体育
             赛事与体育表演吸引大众的眼球，而当下我国内部的体育观赏市场
             只有篮球与足球的发展前景较好，但离市场饱和依然很遥远。究其
             根本，这一局面的形成与相关管理运营人员经营方法灵活度的缺失
             有着莫大的联系。其管理者对于门票价格的规定与销售、场馆场地
             的多种运营方式研究不够透彻，而城市里公共公开的体育馆平日里
             的运营开销较高，要在顾及社会与经济两方效益的同时，承担建设
             债务、利息、场馆保养费、税务等方面的支出，就显得比较困难。
             在此压力之下，其发展能力就较为薄弱。
           </p>          
         </div>
       </div>
     </div>
   </div>


 </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        newslist:[{id:1,mes:'系统通知',time:'2019.11.10',text:'11月15日在本平台有一场户外徒步比赛，欢迎朋友们积极参 与报名，比赛前3名有大奖等着您！'},
          {id:2,mes:'消息通知',time:'2019.11.10',text:'11月15日在本平台有一场户外徒步比赛，欢迎朋友们积极参 与报名，比赛前3名有大奖等着您！'},
          {id:3,mes:'小道消息',time:'2019.11.10',text:'11月15日在本平台有一场户外徒步比赛，欢迎朋友们积极参 与报名，比赛前3名有大奖等着您！'}]

      }
    },
    methods:{
      // 返回
      back(){
        this.$router.push({path: '/index'})
      },
      // 点击查看
      news(item,index){
        var newtext = item
        this.$router.push({path: '/settlement',query: {mes:newtext}})
      }
    },
    mounted() {
      this.utils.getData('/kaichuang-app'+this.ports.manage.newlist, {}, () => {
        console.log('请求失败')
      }, (res) => {
        console.log(res)
     this.newslist = res.list
      });
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

  /*整体内容*/

  .main_pro{
    width: 100%;
    background: #F2F2F2;
    .content{
      width: 100%;
      background: #F2F2F2;
      overflow: hidden;
      .news{
        width: 90%;
        height: 70px;
        background: #ffffff;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        >div{
          width: 90%;
          height: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          .new_title{
            width: 100%;
            height: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;

          }
          .new_pro{
            width: 100%;
            height: 30px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
          }
        }

      }
    }
  }

</style>

