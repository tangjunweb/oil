<template>
  <el-form :inline="true" class="el-form-inline" label-width="65px">
    <el-form-item label="矿区名称">
      <el-input v-model="mineName" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="矿区分类">
      <el-input v-model="mineType" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="时间">
      <el-input v-model="StationTime" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="场站名称">
      <el-input v-model="StationName" placeholder=""></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        StationName: "",
        StationTime: "",
        mineName: "",
        mineType: ""
      };
    }
  };

</script>

<style lang="less" scoped>
  .el-form-inline {
    padding: 20px 0 0;
  }

</style>
