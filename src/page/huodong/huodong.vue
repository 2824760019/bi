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
        现如今，许多老总都很重视公司团建活动，
        比较关注团建活动中安排的节目、饮食等，
        还比较在意员工之后对公司团建的一些看法，
        所以怎样组织一次好的公司团建活动让许多人感到为难。
        今天，小编给大家分享一个成都轰趴馆团建活动方案，希望大家都会喜欢哦！
        如图所示：
       </p>
       <img src="../../assets/imags/tuanjian.jpg">
       <p>
        其实，相对来说规划活动开始时间等要简单许多，
        只有节目和餐饮是最令人头疼的，节目准备得不好吧
        ，害怕大家玩不起来，导致整个团建活动显得很美意思；
        准备餐饮也是十分令人感到头疼的，太贵了不行，味道太差也不行，
        不符合大众口味更是绝对不行的。
       </p>
       <img src="../../assets/imags/miaozhai1.jpg">
       <img src="../../assets/imags/miaozhai2.jpg">
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
        ti:"活动团建信息"
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
