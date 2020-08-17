<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  // async mounted(){
  //   const result=await reqFoodCategorys()
  //   console.log(result)
  // },
  mounted(){

  },
  methods:{
    
  },
  components: {
    FooterGuide,
  },
};
</script>
<style lang="stylus" rel="stylysheet/stylus">
@import 'common/stylus/mixins.styl';
</style>

<style >
@import "../static/css/reset.css";
</style>