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
        西江千户苗寨是一个保存苗族“原始生态”文化完整的地方，
        由十余个依山而建的自然村寨相连成片，是目前中国乃至
        全世界最大的苗族聚居村寨。它是领略和认识中国苗族漫长历史与发展之地。 
       </p>
       <img src="../../assets/imags/miaozhai.jpg">
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
        ti:"旅游跟团信息"
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
