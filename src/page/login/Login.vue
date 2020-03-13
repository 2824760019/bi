<template>
  <div>
    <div class="logins">
      <div class="login_box" v-show="isshow">
        <!--登录开始-->
        <div class="login_pro">
          <img src="../../assets/imags/login01.png"/>
          <div class="input_pro">
            <div>
              <p>用户名</p>
              <input type="text" placeholder="请输入用户名" v-model="login.username"/>
            </div>
            <div>
              <p>密码</p>
              <input type="password" placeholder="请输入密码" v-model="login.password"/>
            </div>
          </div>
          <div style="height: 20px;width: 50%;text-align: center;">
            <span style="text-align: center;color: #ffffff;">{{logintishi}}</span>
          </div>

          <p @click="logins">登陆</p>
          <div class="zuce">
            <p  @click="openRegiste" style="cursor: pointer;">注册</p><span>|</span><p style="cursor: pointer;">忘记密码？</p>
          </div>
        </div>
      </div>
      <!--    注册-->
      <div class="registe" v-show="registeShow">
        <div class="zc_header">
          <p @click="back">
            <img src="../../assets/imags/left.png">
          </p>
          <span>新用户注册</span>
        </div>
        <div class="zc_pro">
          <div>
            <p>账号</p>
            <input type="text" placeholder="请输入账号"  v-model="registe.Account"></input>
          </div>
          <div>
            <p>密码</p>
            <input type="password" placeholder="请输入密码" v-model="registe.password"></input>
          </div>
          <div>
            <p>确认密码</p>
            <input type="password" placeholder="请再次输入密码" v-model="registe.truepassword"></input>
          </div>
          <div>
            <p>邀请码</p>
            <input type="text" placeholder="请输入邀请码(选填)" v-model="registe.Invitation"></input>
          </div>
        </div>
        <div style="height: 20px;width: 50%;text-align: center;">
          <span style="text-align: center;color: #ffffff;">{{registtisi}}</span>
        </div>
        <p @click="registeUser">注册</p>
      </div>
    </div>

  </div>
</template>

<script>
  import qs from 'qs'   //qs库-->作用是格式化数据
  import CryptoJS from "crypto-js"
  var reg = /^1(3[0-9]|4[57]|5[0-9]|66|7[135678]|8[0-9]|9[89])[0-9]{8}$/;
    export default {
        name: "login",
        data(){
          return {

            isshow: true,
            registeShow: false,
            login:{
              username:'',
              password:'',
            },
            logintishi:'',
            // 注册
            registe:{
              Account:'',
              password:'',
              truepassword:'',
              Invitation:''

            },
            registtisi:''
          }
        },
      watch:{
        $route(to,from){
        }
      },
      created(){

      },
      mounted(){
        this.keyupSubmit()
      },
      methods: {
        // openRetrieve(){
        //   this.isshow=false
        //   this.registeShow=false
        //   this.retrieveWindow=true
        // },
        openLogin(){
          this.isshow=true
          this.registeShow=false
          this.retrieveWindow=false
          window.localStorage.setItem('loginstate', 1)
        },
        openRegiste(){
          this.isshow=false
          this.registeShow=true
          this.retrieveWindow=false
          window.localStorage.setItem('loginstate', 2)
        },
        keyupSubmit() {
          document.onkeydown = e => {
            let _key = window.event.keyCode;
            if (_key === 13) {
              this.logins()
            }
          }
        },
        // 返回按钮
        back(){
          this.isshow=true
          this.registeShow=false
        },
        // 登陆
        logins(){
          // this.$router.push({path: '/index'})
          if (this.login.username==''){
            this.logintishi='请输入用户名'
          }else if (!reg.test(this.login.username)) {
            this.logintishi='账号格式错误'
          }else if(this.login.username!='18212121335'){
            this.logintishi='用户名输入不对'
          }else if(this.login.password!='111111'){
            this.logintishi='密码输入错误'
          }else if (this.login.password=='111111'){
            this.$router.push({path: '/index'})
          }
        },

        //登录
        // rememberUser(e){
        //   this.checked=e.target.checked
        // },
        // logins(){
        //   if (this.login.username==''){
        //     this.logintishi='请输入用户名'
        //   }else if (this.login.password==''){
        //     this.logintishi='请输入密码'
        //   }else {
        //     this.http.post(this.ports.manage.shopUserLogin, qs.stringify({
        //       name: this.login.username,
        //       pwd: this.login.password
        //     }), res => {
        //       this.logintishi=res.data.message
        //       if (res.data.message === "登录成功") {
        //         // 返回正确的处理
        //         window.localStorage.setItem('token', res.data.token)
        //         window.localStorage.setItem('userid', res.data.userid)
        //         localStorage.setItem("rememberPsw", true);
        //         this.setCookie(this.login.username, this.login.password, 7);
        //         // this.$router.push('/Index')
        //         this.$router.go(-1)
        //       } else {
        //         // 返回错误的处理
        //       }
        //     }, function (error) {
        //       this.$notify({
        //         title: "请求失败",
        //       });
        //     })
        //
        //   }
        // },
        //注册

        registeUser(){
          if (this.registe.Account=='') {
            this.registtisi='请输入账号'
          }else if (!reg.test(this.registe.Account)) {
            this.registtisi='账号格式错误'
          }else if (this.registe.password=='') {
            this.registtisi='请输入密码'
          } else if (this.registe.truepassword=='') {//手机号不合法
            this.registtisi='请确认密码'
          } else if(this.registe.truepassword!=this.registe.password){
            this.registtisi='两次输入密码不同'
          }else if (this.registe.Invitation=='') {
            this.registtisi='请输入邀请码'
          }else{
            console.log('注册成功')
            this.registtisi='注册成功，即将登录'
                this.login.username=this.registe.Account
                this.login.password=this.registe.password
                var a=window.setInterval(() => {//定时器
                  this.logins()
                  // this.isshow=true
                  // this.registeShow=false
                  window.clearInterval(a)
                }, 2000)
            // this.http.post(this.ports.manage.shopUserRegist, qs.stringify({
            //   name:this.registe.username,psid:this.psid,pwd:this.registe.pwdOne,code:this.registe.code,phone:this.registe.phones
            // }), res => {
            //   if (res.data.message=='注册成功'){
            //     this.tishi='注册成功，即将登录'
            //     this.login.username=this.registe.username
            //     this.login.password=this.registe.pwdOne
            //     var a=window.setInterval(() => {//定时器
            //       this.logins()
            //       window.clearInterval(a)
            //     }, 2000)
            //   }
            // }, function (error) {
            //   this.$notify({
            //     title: "请求失败",
            //   });
            // })
          }
        },

        //找回密码
        // getCodes(){
        //   if (!this.retrieve.phones) {//未输入手机号
        //     this.tishi='请输入手机号码'
        //   } else if (!reg.test(this.retrieve.phones)) {//手机号不合法
        //     this.tishi='手机号错误'
        //   }else {
        //     this.http.post(this.ports.manage.shopUserFindPwdSendSms, qs.stringify({
        //       phone:this.retrieve.phones,
        //     }), res => {
        //       if (res.data.result==="1") {
        //         this.psids=res.data.psid
        //         this.contents = this.totalTimes + 's后重新发送' //这里解决60秒不见了的问题
        //         let clock = window.setInterval(() => {
        //           this.totalTimes--
        //           this.contents = this.totalTimes + 's后重新发送'
        //           if (this.totalTimes < 0) {     //当倒计时小于0时清除定时器
        //             window.clearInterval(clock)
        //             this.contents = '重新发送验证码'
        //             this.totalTimes = 60
        //           }
        //         }, 1000)
        //       }else{
        //         this.tishi=res.data.message
        //       }
        //     }, function (error) {
        //       this.$notify({
        //         title: "请求失败",
        //       });
        //     })
        //   }
        // },
        // retrieveUser(){
        //   if (this.retrieve.phones=='') {
        //     this.tishi='请输入手机号'
        //   }else if (!reg.test(this.retrieve.phones)) {//手机号不合法
        //     this.tishi='手机号错误'
        //   }else if (this.retrieve.code=='') {
        //     this.tishi='请输入验证码'
        //   }else if (this.retrieve.pwdOne=='') {
        //     this.tishi='请输入新密码'
        //     }else if (this.retrieve.pwdTwo=='') {
        //     this.tishi='请确认密码'
        //   }else if (this.retrieve.pwdTwo!=this.retrieve.pwdOne) {
        //     this.tishi='密码不一致'
        //   }else{
        //     this.http.post(this.ports.manage.shopUserFindPwd, qs.stringify({
        //       psid:this.psids,pwdone:this.retrieve.pwdOne,pwdtwo:this.retrieve.pwdTwo,code:this.retrieve.code,phone:this.retrieve.phones
        //     }), res => {
        //       this.tishi=res.data.message
        //     }, function (error) {
        //       this.$notify({
        //         title: "请求失败",
        //       });
        //     })
        //   }
        // },
        // //设置cookie
        // setCookie(portId, psw, exdays) {
        //   // Encrypt，加密账号密码
        //   var cipherPortId = CryptoJS.AES.encrypt(
        //     portId+'',
        //     "secretkey123"
        //   ).toString();
        //   var cipherPsw = CryptoJS.AES.encrypt(psw+'', "secretkey123").toString();
        //   console.log(cipherPortId+'/'+cipherPsw)//打印一下看看有没有加密成功
        //
        //   var exdate = signUp Date(); //获取时间
        //   exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //   //字符串拼接cookie，为什么这里用了==，因为加密后的字符串也有个=号，影响下面getcookie的字符串切割，你也可以使用更炫酷的符号。
        //   window.document.cookie =
        //     "currentPortId" +
        //     "==" +
        //     cipherPortId +
        //     ";path=/;expires=" +
        //     exdate.toGMTString();
        //   window.document.cookie =
        //     "password" +
        //     "==" +
        //     cipherPsw +
        //     ";path=/;expires=" +
        //     exdate.toGMTString();
        // },
        // //读取cookie
        // getCookie: function() {
        //   if (document.cookie.length>0) {
        //     var arr = document.cookie.split("; "); //这里显示的格式请根据自己的代码更改
        //     for (var i = 0; i<arr.length; i++) {
        //       var arr2 = arr[i].split("=="); //根据==切割
        //       //判断查找相对应的值
        //       if (arr2[0] == "currentPortId") {
        //         // Decrypt，将解密后的内容赋值给账号
        //         var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
        //         this.login.username = bytes.toString(CryptoJS.enc.Utf8);
        //       } else if (arr2[0] == "password") {
        //         // Decrypt，将解密后的内容赋值给密码
        //         var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
        //         this.login.password= bytes.toString(CryptoJS.enc.Utf8);
        //       }
        //     }
        //   }
        // },
      },
    }
</script>

<style scoped lang="scss">
  .logins{
    width: 100%;
    /*background-color: red;*/
    height:100vh;
    background:url("../../assets/imags/bj01.png") no-repeat;
    background-size: 100% 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_box{
      width: 248px;
      height: 400px;
      top:6%;
      .login_pro{
        width: 100%;
        height: 100%;
        /*background: orange;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .input_pro{
          width: 100%;
          height: 140px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          >div{
            width: 100%;
            >p{
              font-size:15px;
              font-family:Runda;
              font-weight:400;
              line-height:29px;
              color:rgba(255,255,255,1);
            }
            >input{
              width: 100%;
              height: 35px;
              color: #ffffff;
              background:rgba(47,70,165,1);
              border:1px solid rgba(13,29,95,1);
              border-radius: 2px;
            }
          }

        }
        >p{
          width: 100%;
          height:50px;
          border-radius:100px;
          background:rgba(255,215,57,1);
          text-align: center;
          font-size:20px;
          font-family:Runda;
          font-weight:500;
          line-height:50px;
          color:rgba(0,0,0,1);
          cursor: pointer;
        }
        .zuce{
          width: 50%;
          height: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size:13px;
          font-family:Runda;
          font-weight:500;
          line-height:34px;
          color:rgba(255,255,255,1);
        }
      }
    }

  }
  /*注册*/
  .registe{
    width: 40%;
    height: 444px;
    /*background: orange;*/
    margin-top: -120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 500px) {
      width: 80%;
      height: 444px;
      /*background: orange;*/
      margin-top: -120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }
    .zc_header{
      width: 100%;
      height: 32px;
      /*background: pink;*/
      display: flex;
      align-items: center;
      >p{
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        background:rgba(85,118,223,1);
        border-radius:50%;
      }
      >span{
        font-size:23px;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:67px;
        margin-left: 35%;
       align-self: center;
        color:rgba(255,255,255,1);
        @media screen and (max-width: 500px) {
          font-size:23px;
          font-family:PingFang SC;
          font-weight:bold;
          line-height:67px;
          margin-left: 18%;
          align-self: center;
          color:rgba(255,255,255,1);
        }
      }
    }
    .zc_pro{
      width: 245px;
      height: 250px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      >div{
        width: 100%;
        height: 50px;
        background:rgba(47,70,165,1);
        border:1px solid rgba(13,29,95,1);
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius:2px;
        >p{
          font-size:15px;
          font-family:Runda;
          font-weight:400;
          line-height:34px;
          color:rgba(255,255,255,1);
        }
        >input{
          background:rgba(47,70,165,1);
          outline: none;
          border: none;
          color: #ffffff;
        }
      }
    }
    >p{
      width:45%;
      height:50px;
      background:rgba(255,215,57,1);
      opacity:1;
      border-radius:100px;
      text-align: center;
      font-size:20px;
      font-family:Runda;
      font-weight:500;
      line-height:50px;
      color:rgba(0,0,0,1);
      cursor: pointer;
      @media screen and (max-width: 500px) {
        width:85%;
        height:50px;
        background:rgba(255,215,57,1);
        opacity:1;
        border-radius:100px;
        text-align: center;
        font-size:20px;
        font-family:Runda;
        font-weight:500;
        line-height:50px;
        color:rgba(0,0,0,1);
        cursor: pointer;
      }
    }
  }
  /*@import "../../page/style/main";*/
  /*@import "../../page/style/login";*/
  /*@import "../../page/style/common";*/
  /*.block{*/
  /*  width: 100%;*/
  /*  height: 8vh;*/
  /*  background: #04110E;*/
  /*  line-height: 8vh;*/
  /*  .main{*/
  /*    width: 1200px;*/
  /*    margin: auto;*/
  /*    li{*/
  /*      float: left;*/
  /*    }*/
  /*    li:last-child{*/
  /*      margin-left: 100px;*/
  /*      color: #00C9A1;*/
  /*      font-size: 24px;*/
  /*    }*/
  /*  }*/
  /*}*/
  /*.footer{width: 100%;height: 28vh;background: #F5F5F5;text-align: center;color: #a2a2a2;font-size: 12px;padding-top:18px}*/
  /*.footer_content{*/
  /*  width: 1200px;*/
  /*  margin: auto !important;*/
  /*  li{*/
  /*    float: left;*/
  /*    width: 20%;*/
  /*    text-align: center;*/
  /*    color: #a2a2a2;*/
  /*    p{*/
  /*      width: 27px;*/
  /*      margin: auto !important;*/
  /*      border-bottom: 2px solid #a2a2a2;*/
  /*      img{*/
  /*        margin-bottom: 10px;*/
  /*      }*/
  /*    }*/
  /*    div{*/
  /*      margin-top: 10px;*/
  /*      font-size: 16px;*/
  /*      line-height: 30px;*/
  /*      color: #a2a2a2;*/
  /*    }*/
  /*  }*/
  /*}*/
  .copy{
    padding-top: 10px;
    background: #F5F5F5;
    P{
      color: #a2a2a2;
      font-size: 16px;
      line-height: 36px;
    }
  }
  /*选择*/
  .radio{
    display: inline-block;
    position: relative;
    line-height: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  .radio input{
    display: none;
  }
  .radio .radio-bg{
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 5px;
    padding: 0;
    vertical-align: top;
    background-image: url('../../assets/img/gou1.png');
    background-size: 20px 20px;
    cursor: pointer;
  }
  .radio .radio-on{
    display: none;
  }
  .radio input:checked + span.radio-on{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: url('../../assets/img/gou9.png');
    background-size: 20px 20px;
    display: inline-block;
  }
</style>
