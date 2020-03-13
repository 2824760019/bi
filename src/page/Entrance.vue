<template>
  <div>
    <Index></Index>
    <router-view/>
    <commons></commons>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Index from '../page/Index/Index'
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    methods:{
    },
    components:{
      'Index':Index,
      'commons':commons,
    }
  }
</script>

<style scoped >
</style>
