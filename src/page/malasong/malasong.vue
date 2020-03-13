<template>
  <div>
    <div class="header">
      <img src="../../assets/imags/tui.png" @click="back">
      <h1>{{ti}}</h1>
      <p></p>
    </div>
    <!---内容的开始-->
     <div class="xingxi">
       <p>
       2018贵阳国际马拉松赛落幕 中国选手夺得女子马拉松冠军:</br>2018-07-24 16:08:20
      </br> 来源:贵阳国际马拉松官网
       </p>
       <img src="../../assets/imags/malasong1.jpg">
       <p>
         7月22日上午7:30，2018贵阳国际马拉松赛在贵阳市奥体中心鸣枪开赛，来自17个国家和地区的25000余名跑者在“中国数谷”爽爽的贵阳激情开跑，共同感受“中国避暑之都”的清新与绿意，数万名观众在赛道两旁为选手加油助威。 
      </p>
       <img src="../../assets/imags/malasong2.jpg">
        <p>
          经过两个多小时的激烈角逐，来自埃塞俄比亚的选手达贝·艾菲·德贝莱以2小时25分14秒获得男子马拉松冠军，中国选手何引丽以2小时44分57秒的成绩夺得女子全马冠军；
        </p>
       <img src="../../assets/imags/malasong3.jpg">
     </div>
    <!---内容的结束-->
         <!--底部-->
    <div class="footer">
      <div>
        <p>有任何建议请联系我们:111111111</p>
        <p>开创体育所有：&copy1997-2020</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ti:"赛事信息"
      }
    },
    methods: {
      // 返回
      back() {
        this.$router.go(-1)
      }
    },
  }
</script>
<style scoped lang="scss">
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
      font-weight:bold;
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
 .xingxi{
     width:90%;
     margin:0 auto;
     >p{
         font-size:20px;
         color:back;
     }
   >img{
        width:100%;
        margin:5px auto;
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
</style>
