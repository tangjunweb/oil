<template>
  <div>
    <el-form :inline="true" class="el-form-inline" label-width="65px">
      <el-form-item label="矿区名称">
        <el-input v-model="AreaName" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="工艺名称">
        <el-input v-model="TechnologyName" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="场站名称">
        <el-input v-model="stationName" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="time" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否通过">
        <el-select v-model="Adopt" placeholder="">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="作业区名称">
        <el-input v-model="TaskName" placeholder=""></el-input>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        AreaName: "",
        TechnologyName: "",
        TaskName: "",
        Adopt: "",
        time:"",
        stationName:""
      };
    }
  };

</script>

<style lang="less" scoped>
  .el-form-inline {
    padding: 20px 0 0;
  }

</style>
