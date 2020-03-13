<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 提供reload方法
  provide: function () {
    return {
      reload: this.reload
    }
  },
  // isRouterAlive控制显示
  data: function () {
    return {
      isRouterAlive: true
    }
  },
  watch: {
    // $route(to, from) {
    //   console.log(to)
    // },
  },
  methods:{
    // 刷新方法
    reload: function () {
      this.isRouterAlive = false;
      // 该方法会在dom更新后执行
      this.$nextTick(function () { this.isRouterAlive = true })
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted(){
    // console.log(window.localStorage.getItem('token'))
    // if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    //   console.log('手机端')
    //   window.location.href='https://www.baidu.com/';
    // } else {
    //   console.log('pc端')
    //   // window.location.href='http://www.gzzkrh.com:8090/grid-user/#/login';
    // }
  },
  components:{
  }
}
</script>

<style scoped lang="scss">
  /*.router-link-active {*/
    /*color:#00C9A1 !important;*/
    /*border-bottom: 2px solid #00C9A1;*/
  /*}*/
</style>
