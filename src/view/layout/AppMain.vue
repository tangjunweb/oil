<template>
   <div class="appMain">
     <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
   </div>
</template>
 
<script>
export default {
  name: "Appmain",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="less" scoped>
  .appMain{
    // width:100%;
    // height:100%;
    // overflow-y: auto;
  }
</style>
