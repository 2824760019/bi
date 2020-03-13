<template>
  <div>
    <div class="header">

      <img src="../../assets/imags/tui.png" @click="back">

      <h1>新闻详情</h1>
      <p></p>
    </div>
    <div class="title">
      <h1>{{title}}</h1>
      <p>{{times}}</p>
    </div>
<!--    内容-->
     <div v-html="new_pro" class="pro_text">
     </div>
     <div v-html="new_xing" class="xing_xi"></div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        title:'2020年2月1日新型冠状病毒肺炎最新消息',
        times:'2020-2-20',
        new_pro:'1月31日0—24时，31个省（自治区、直辖市)和新疆生产建设兵团报告新增确诊病例2102例，新增重症病例268例，新增死亡病例46例（湖北省45例、重庆市1例），新增治愈出院病例72例，新增疑似病例5019例。',
        new_xing:'截至1月31日24时，国家卫生健康委收到31个省（自治区、直辖市）和新疆生产建设兵团累计报告确诊病例11791例（江西省、陕西省、甘肃省各核减1例），现有重症病例1795例，累计死亡病例259例，累计治愈出院病例243例，共有疑似病例17988例。目前累计追踪到密切接触者136987人，当日解除医学观察6509人，共有118478人正在接受医学观察。累计收到港澳台地区通报确诊病例30例：香港特别行政区13例，澳门特别行政区7例，台湾地区10例。'
      }
    },
    methods: {
      // 返回
      back() {
        this.$router.go(-1)
      }
    },
    mounted() {
     
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
      width: 80%;
      text-align: center;
      font-size:18px;
      font-weight:400;
      color:#333333;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    >p{
      font-size:15px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(85,118,223,1);
      opacity:0.9;

    }
  }

  .title{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 20px;
    margin-top: 10px;
    >h1{
      font-size: 18px;
      font-weight: 600;
    }
    >p{
      color: #cccccc;
    }
  }
  .pro_text{
    width: 90%;
    margin: 0 auto;
  }
 .xing_xi{
    width: 90%;
    margin: 0 auto;
  }
</style>

