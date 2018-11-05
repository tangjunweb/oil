<template>
  <div>
    <el-row class="white">
      <el-col :span="24">
        <Title name="场站信息">
          <Button :setBtn="setBtn"></Button>
        </Title>
        <Search-form></Search-form>
      </el-col>
    </el-row>
    <el-row class="white nogap">
      <el-col :span="24">
        <Title name="基础信息统计表"></Title>
        <!-- <Search-form></Search-form> -->
        <Reserform></Reserform>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import Reserform from "../../../view/login/login1";
  export default {
    components:{
      Reserform
    },
    data() {
      return {
         setBtn:{
           save:true,
           add:true,
           del:true,
           pre:true,
           next:true,
        }
      };
    }
  };

</script>

<style lang="less" scoped>
</style>
