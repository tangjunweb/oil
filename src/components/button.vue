<template>
          <div class="opration">
              <el-button v-if="save" class="save btn"><i><img src="../assets/icon_save.png" alt=""></i> 保存</el-button>
              <el-button v-if="search" class="search btn" type="primary" icon="el-icon-search">查询</el-button>
              <el-button v-if="add" class="btn" type="success" icon="el-icon-plus">新增</el-button>
              <el-button v-if="search" class="recive btn" type="search" icon="el-icon-upload ">Excel导入</el-button>
              <el-button v-if="del" class="btn" type="info" icon="el-icon-delete">删除</el-button>
              <el-button v-if="recive" class="recive btn" type="info" icon="el-icon-check">接受</el-button>
              <el-button v-if="addrole" class="addUser btn" type="success" icon="el-icon-plus">新增角色</el-button>
              <el-button v-if="pre" class="recive gap" icon="el-icon-arrow-left"></el-button>
              <el-button v-if="next" class="recive gap" icon="el-icon-arrow-left" style="transform:rotate(180deg)"></el-button>
          </div>
</template>
 
<script>
export default {
  props: ["setBtn"],
  data() {
    return {
      save: this.setBtn&&this.setBtn.save?true:false,
      add: this.setBtn&&this.setBtn.add?true:false,
      del: this.setBtn&&this.setBtn.del?true:false,
      next: this.setBtn&&this.setBtn.next?true:false,
      pre:this.setBtn&&this.setBtn.pre?true:false,
      recive:this.setBtn&&this.setBtn.recive?true:false,
      search:this.setBtn&&this.setBtn.search?true:false,
      addrole:this.setBtn&&this.setBtn.addrole?true:false
    };
  },
  methods:{
   
  }
};
</script>

<style lang="less" scoped>
.opration {
  margin-top: 3px;
  float: right;
}
</style>
