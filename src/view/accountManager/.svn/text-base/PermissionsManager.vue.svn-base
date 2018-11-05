<template>
  <div>
    <el-row class="white">
      <el-col :span="24">
        <Title name="角色权限管理">
          <Button :setBtn="setBtn"></Button>
        </Title>
        <el-form :inline="true" class="el-form-inline" label-width="65px">
          <el-form-item label="角色分类">
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="white nogap">
      <el-col :span="12">
        <Title name="角色列表"></Title>
          <el-table :data="auditData" border style="width: 100%">
            <el-table-column prop="roleDescriptionName" label="角色分类"></el-table-column>
            <el-table-column prop="roleName" label="角色名称"></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">编辑权限</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-col>
      <el-col :span="12">
        <Title name="设置权限"></Title>
        <el-tree :data="authModulars" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps"></el-tree>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import { findAllRole,findModularByRoleId } from "@/api/permissions";
  import Reserform from "../../view/login/login1";

  export default {
    data() {
      return {
        value4:"",
        options:[],
        setBtn: {
          save: true,
          search: true,
          addrole: true,
        }, 
        auditData: [],
        authModulars: [],
        defaultProps: {
          children: 'children',
          label: 'pageName'
        }
      }
    },
    components: {
      Reserform
    },
    created() {
      this.getAllRole();
      this.getAllPermission();
    },
    methods:{
      getAllRole(){
        findAllRole().then(res => {
          console.log("allrole")
          console.log(res.data.data)

          if (res.data.msg == '查询成功') {
            this.auditData = res.data.data;
          } else {
            console.log("用户列表数据加载失败");
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message.error(err);
        });
      },
      getAllPermission(){
        findModularByRoleId({json:"{'roleId':'1'}"}).then(res => {
          console.log("findModularByRoleId")
            console.log(res.data.data)
          if (res.data.msg == '查询成功') {
            this.authModulars = res.data.data.authModulars.children;
          } else {
            console.log("用户列表数据加载失败");
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message.error(err);
        });
      }
    },

  };

</script>

<style lang="less" scoped>
  .el-form-inline {
    padding: 20px 0 0;
  }
</style>
