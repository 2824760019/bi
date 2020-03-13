<template>
  <div>
    <!--    头部-->
    <div class="header">
        <img src="../../assets/imags/tui.png" @click="back">
      <h1>参加报名</h1>
      <p></p>
    </div>

    <!--    整体内容-->
    <div class="content">
<!--      项目名称-->
     <div class="project_name">
        <p>项目名称</p>
       <input type="text" :placeholder="mesgess" v-model="projectname">
     </div>
      <!--      姓名-->
      <div class="project_name">
        <p>姓名</p>
        <input type="text" placeholder="请输入姓名" v-model="pesonname">
      </div>
      <!--      性别-->
      <div class="project_name">
        <p>性别</p>
        <div  v-for="(item,index) in sex" :key="index">
          <div>
            <p :class="activate ==index?'dian':'quan'"  @click="sexchoose(index,item)"><img src="../../assets/imags/gou.png" height="20px;"></p>
            <p style="color: #333333">{{item.name}}</p>
          </div>

        </div>
      </div>
      <!--      手机-->
      <div class="project_name">
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>

<!--      报名按钮-->
      <div class="sunmit" @click="sunmit">
        <p>确认提交</p>
      </div>

    </div>

<!--    弹出模态框-->
    <div :class="isshow ?'modelpro':'hiddenpro'">
        <div>
          <p class="title_sub">提交成功</p>
          <p class="sub_pro">你的资料提交成功</p>
          <p class="sub_true" @click="sure">好的</p>
        </div>
    </div>

  </div>
</template>

<script>

  var qs = require('qs');
  export default {
    name: "",
    data(){
      return {
        mesgess:'',
        pesonname:'',
        sexname:'',
        phone:'',
        stype:'',
        projectname:'',
        sex:[{id:1,name:'男'},{id:1,name:'女'}],
        activate:0,
        isshow:false,

      }
    },
    created(){

    },

    methods:{
      // 性别选择
      sexchoose(index,item){
        console.log(item)
        console.log(index)
        var sexname = item.name
        this.sexname = sexname
        this.activate = index
      },
      // 返回
      back(){
        var mes = this.$route.query.mes
        this.stype = mes
        this.$router.push({path: '/product',query:{mes:mes}})
      },
      // 确认提交
      sunmit(){
        console.log('提交了')

        console.log('请求的数据')
        this.utils.getData('/kaichuang-app'+this.ports.manage.singup,
          {stype:stype,title:projectname,name:pesonname,sex:sexname,mobile:phone,fid:4},
          () => {
          console.log('请求失败')
        }, (res) => {
          console.log(res)
            this.isshow = true

        });

      },
      // 提交成功
      sure(){
        this.isshow = false
        this.$router.push({path: '/index'})
      }
    },
    mounted(){
      console.log(this.$route.query);
      var stype = this.$route.query.stype
      this.stype = stype
      var mesgess = this.$route.query.mes
      this.mesgess = mesgess

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

  /*整体内容*/
  .content{
   width: 100%;
    .project_name{
      width: 100%;
      height: 50px;
      margin-top: 10px;
      border-bottom: 1px solid #F2F2F2;
      display: flex;
      align-items: center;
      >p{
        width:80px;
        height:30px;
        margin-left: 15px !important;
        line-height: 30px;
        font-size:15px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      >input{
        width:50%;
        height:40px;
        font-size:15px;
        outline: none;
        border:none;


      }
      ::-webkit-input-placeholder {
        color: #999999;
      }
      >div{
        width:25%;
        height:40px;
        font-size:15px;
        display: flex;
        align-items: center;
        >div{
          width: 45%;
          height: 50%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .quan{
            width: 20px;
            height: 20px;
            border: 1px solid #F2F2F2;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dian{
            background: #5576DF;
            width: 20px;
            height: 20px;
            border: 1px solid #F2F2F2;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }


      }
    }

    /*确认提交*/
    .sunmit{
      width: 80%;
      height: 50px;
      margin: 50px auto;
      background: #5576DF;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity:1;
      border-radius:100px;
      font-size:18px;
      font-family:Runda;
      font-weight:500;
      color:rgba(255,255,255,1);
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
    margin: 100px auto;
    width: 80%;
    height: 230px;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .title_sub{
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size:20px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .sub_pro{
      width: 100%;
      height: 80px;
      text-align: center;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:400;
      line-height:80px;
      color:rgba(51,51,51,1);
    }
    .sub_true{
      width: 100%;
      height: 30px;
      font-size:15px;
      font-family:PingFang SC;
      font-weight:400;
      display: flex;
      justify-content: center;
      align-items: center;
      color:rgba(85,118,223,1);
      border-top:1px solid rgba(203,203,203,1);
      padding-top: 10px;
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


