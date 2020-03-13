<template>
  <div>
    <div class="header">
      <img src="../../assets/imags/tui.png" @click="back">
      <h1>{{ti}}</h1>
      <p></p>
    </div>
    <!---内容的开始-->
    <!-- 体育用品-->
         <div class="new_competition">
           <ul class="competition_pro">
             <li>
               <img src="../../assets/imags/tiaosheng.jpg">
               <p>花样绳索</p>
                <span> 
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 20元</b>
                </span>
             </li>
              <li>
               <img src="../../assets/imags/wangqiu.jpg" style="height:76px;">
               <p>橄榄球</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 100元</b>
               </span>
             </li>
              <li>
               <img src="../../assets/imags/lanqiu.jpg" style="height:80px;">
               <p>篮球</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 150元</b>
               </span>
             </li>
              <li>
               <img src="../../assets/imags/pingpang.jpg">
               <p>乒乓球</p>
               <span>
                 <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 50元</b>
               </span>
             </li>
              <li>
               <img src="../../assets/imags/pingpang1.jpg">
               <p>乒乓球拍</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 100元</b>
               </span>
             </li>
             <li>
               <img src="../../assets/imags/yumaoqiu.jpg">
               <p>羽毛球拍</p>
               <span>
                 <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 150元</b>
               </span>
             </li>
             <li>
               <img src="../../assets/imags/qiu1.jpg">
               <p>羽毛球</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 20元</b>
               </span>
             </li>
              <li>
               <img src="../../assets/imags/zuqiu1.jpg" style="height:90px;">
               <p>足球</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 100元</b>
               </span>
             </li>
             <li>
               <img src="../../assets/imags/zuqiu2.jpg">
               <p>足球</p>
               <span>
                  <em style="color:#000000;font-weight:bold;margin-left:20px;">价格:</em>
                  <b style="color:red;">&yen 120元</b>
               </span>
             </li>                              
           </ul>
           <h2>
             <router-link to="/solution?mes=最新赛事" style="color: #cccccc">查看更多>></router-link>
           </h2>
         </div>
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
        ti:"商城体育用品展示"
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
  /*体育用品*/
  .new_competition{
    width: 100%;
    /*height: 428px;*/
    /*height: 1000px;*/
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
</style>
