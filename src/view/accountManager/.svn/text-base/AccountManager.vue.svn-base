<template>
  <div>
    <el-row class="white">
      <el-col :span="24">
        <Title name="场站信息">
          <Button :setBtn="setBtn"></Button>
        </Title>
        <el-form :inline="true" class="el-form-inline" label-width="65px">
          <el-form-item label="矿区名称">
            <el-select v-model="value4" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="作业区名称" label-width="75px">
            <el-input v-model="mineType" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="账号等级">
            <el-input v-model="acountLevel" placeholder=""></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="white nogap">
      <el-col :span="24">
        <Title name="账号管理"></Title>
        <template>
          <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="矿区名称" ></el-table-column>
          <el-table-column prop="name" label="作业区名称" ></el-table-column>
          <el-table-column prop="name" label="场站名称" ></el-table-column>
          <el-table-column prop="name" label="工艺分类" ></el-table-column>
          <el-table-column prop="name" label="用户名" ></el-table-column>
          <el-table-column prop="name" label="姓名" ></el-table-column>
          <el-table-column prop="name" label="手机号" ></el-table-column>
          <el-table-column prop="address" label="角色"></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">修改密码</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-row :gutter="20">
          <el-col :span="6" >
            <el-pagination layout="slot,prev,jumper,next" prev-text="< 上一页"  next-text="下一页 >" :total="50" :page-count="5">
              <span>共 5 页</span>
            </el-pagination>
          </el-col>
        </el-row>
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
        mineType:"", //作业区名称
        acountLevel:"", //账号等级
        value4:"",  //矿区名称
        options:[],//矿区名称下拉
         setBtn:{
           search:true,
           add:true,
           excel:true
        },
        tableData: [{
                  date: '2016-05-03',
                  name: '11',
                  province: '上海',
                  city: '普陀区',
                  address: '22',
                  zip: 200333
                }]
      };
    },
    components:{

    },
    methods:{
      saveInfo() {
          console.log(11);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };

</script>

<style lang="less" scoped>
     .el-form-inline {
       padding: 20px 0 0;
     }
</style>
