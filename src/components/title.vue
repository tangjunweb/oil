<template>
      <div class="title">
          <slot></slot>
          <h3>{{name}}</h3>
      </div>
</template>
 
<script>
export default {
  props:['name'],
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
 .title{
    padding:0 20px;
     h3{
         color:#02b4fa;
         font-size: 16px;
         height:50px;
         line-height: 50px;
         border-bottom: 1px solid #02b4fa;

     }
 }
</style>
