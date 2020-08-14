<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vue'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
// import {reqFoodCategorys} from './api'
export default {
  // async mounted(){
  //   const result=await reqFoodCategorys()
  //   console.log(result)
  // },
  mounted(){
    this.$store.dispatch('getAddress')

  },
  methods(){
    ...
  }
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