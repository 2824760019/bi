<template>
  <div>
    新闻的内容
  </div>
</template>

<script>
  var qs = require('qs');
  export default {
    name: "",
    data(){
      return{

      }
    },
    mounted() {
      console.log(this.$route.query);
    }
  }
</script>

<style scoped lang="scss">

</style>

