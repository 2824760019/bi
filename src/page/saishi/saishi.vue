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
       三泰·莲花3-2红润化工 荣获2018年魅力贵州超级杯冠军发布时间:</br>2018-07-22 19:33:34 
      </br> 来源:贵州体育在线 
       </p>
       <img src="../../assets/imags/qiusai.jpg">
       <img src="../../assets/imags/qiusai1.jpg">
        <p>
          12月1日，由贵州省足球协会主办、乌当区足球协会承办的2018/19赛季贵州省五人制足球联赛“天嘉公路杯”乌当区预选赛在乌当二中拉开序幕。2018/19赛季贵州省五人制足球联赛分三阶段进行，分别为：区县预选赛、市州决赛以及全省总决赛。全省计划设立80个预选赛赛区，每一个赛区不少于8支球队参赛，整个赛事预计直接参赛人数达6400-9600人。预选赛各赛区冠军球队参加市州决赛，贵阳市、遵义市、安顺市、黔南州、黔东南州、铜仁市、毕节市、六盘水市、黔西南州以及贵安新区共10个赛区的冠军球队将代表各自地区参加全省总决赛。
        </p>
       <img src="../../assets/imags/qiusai2.jpg">
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
