<template>
  <div>
    <!--    头部-->
    <div class="header">

        <img src="../../../assets/imags/tui.png" @click="back">

      <h1>{{title}}详情</h1>
      <p></p>
    </div>

<!--    整体内容-->
<div class="content">
  <div class="pro_main">

    <div class="title_text">
      <div>
        <p>{{note | ellipsis }}</p>
        <ul>
          <li>{{time | dateFmt('YYYY年MM月DD日')}}</li>
          <li>阅读量：{{toread}}</li>
          <li>来源：{{source}}</li>
        </ul>
      </div>
    </div>

    <div class="text_pro" v-html="mes"></div>
  </div>
</div>
    <!--底部-->
    <div class="footer">
      <div>
        <p>有任何建议请联系我们：0853—44578475</p>
        <p>开创体育网版权所有：&copy1997-2018</p>
      </div>
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
        if (value.length > 45) {
          return value.slice(0,45) + '...'
        }
        return value
      }
    },
    data(){
      return {
        title:'',
        projectID:'',
        note:'',
        time:'',
        source:'',
        toread:'',
        mes:''
      }
    },
    created(){

    },

    methods:{
      // 返回
      back(){
        this.$router.go(-1)
      },
    },
    mounted(){
      console.log(this.$route.query);

      var mes = this.$route.query.mes.content
      var title = this.$route.query.mes.title
      this. title =  title
      var note = this.$route.query.mes.note
      this.note = note
      var time = this.$route.query.mes.create_time
      this.time = time
      var source = this.$route.query.mes.source
      this.source = source
      var toread = this.$route.query.mes.toreads
      this.toread = toread

      if(mes){
        var mes = mes.replace(/src="/g, 'src="' + this.ports.kcimgurl).replace(/\<img/gi, '<img mode="widthFix" style="width:100%;margin-top:10px"');
        this.mes = mes
      }

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

  /*整体内容*/
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
 align-items: center;
    .pro_main{
      width: 90%;

      /*头部的介绍内容*/
      .title_text{
        width: 100%;
        height: 72px;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        >div{
          width: 95%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          >p{
            width: 100%;
            height: 30px;
            font-size: 13px;
            font-family:HYCuJianHeiJ;
            font-weight:400;
            color:#333333;
          }
          >ul{
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:rgba(153,153,153,1);
          }
        }
      }

      /*文本内容*/
     .text_pro{
       width: 100%;
       margin-top: 20px;

     }
    }
  }
  /*投票*/
.tou{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  >div{
    width: 90px;
    height: 44px;
    background:rgba(85,118,223,1);
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
      font-size:13px;
      font-family:Runda;
      font-weight:500;
      color:rgba(255,255,255,1);
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
</style>



