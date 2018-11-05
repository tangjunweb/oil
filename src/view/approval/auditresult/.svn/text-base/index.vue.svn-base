<template>
  <div>
    <el-row class="white">
      <el-col :span="24">
        <Title name="场站信息">
        </Title>
        <!-- <Auditsearch></Auditsearch> -->
        <el-form :inline="true" class="el-form-inline" label-width="65px">
          <el-form-item label="矿区名称">
            <el-input v-model="AreaName" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="工艺名称">
            <el-input v-model="TechnologyName" placeholder=""></el-input>
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
      </el-col>
    </el-row>
    <el-row class="white nogap">
      <el-col :span="24">
        <Title name="审核查询"></Title>
        <el-table :data="auditData" v-loading="loading" border element-loading-text="拼命加载中" style="width: 100%">
          <el-table-column prop="station" label="场站"></el-table-column>
          <el-table-column prop="CreatedTime" label="提交时间"></el-table-column>
          <el-table-column prop="Auditpeople" label="审核人"></el-table-column>
          <el-table-column prop="Audit" label="审核意见"></el-table-column>
          <el-table-column prop="export" label="是否通过"></el-table-column>
          <el-table-column prop="resultTime" label="返回时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="detail(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div v-show="totalPage>PageCount" class="paginationW">
          <el-pagination background @current-change="CurChange" :current-page.sync="currentPage" :page-size="PageCount"
            :total="totalPage" layout="prev, pager, next"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
// import Auditsearch from "@/components/Auditsearch";
import { examineResult } from "@/api/audit";
export default {
  // components: {
  //   Auditsearch
  // },
  data() {
    return {
      auditData: [
        {
          ID: 1,
          station: "作业区",
          CreatedTime: "2018-2-2",
          Auditpeople: "小明",
          Audit: "不同意",
          export: "驳回",
          resultTime: "2018-4-2"
        },
        {
          ID: 2,
          station: "作业区",
          CreatedTime: "2018-2-2",
          Auditpeople: "小明",
          Audit: "不同意",
          export: "驳回",
          resultTime: "2018-4-2"
        },
        {
          ID: 3,
          station: "作业区",
          CreatedTime: "2018-2-2",
          Auditpeople: "小明",
          Audit: "不同意",
          export: "驳回",
          resultTime: "2018-4-2"
        },
        {
          ID: 4,
          station: "作业区",
          CreatedTime: "2018-2-2",
          Auditpeople: "小明",
          Audit: "不同意",
          export: "驳回",
          resultTime: "2018-4-2"
        }
      ],
      PageIndex: 1,
      PageCount: 2,
      // 当前页
      currentPage: 1,
      // 分页
      loading: false,
      totalPage: 4,
      year: "2016.06.04",
      stationId: "",
      taskAreaId: "",
      AreaName: "",
      TechnologyName: "",
      TaskName: "",
      Adopt: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //分页
    CurChange(val) {
      this.PageIndex = val;
      this.getData();
    },
    //加载数据
    getData() {
      // this.loading = true;
      examineResult({ year: this.year })
        .then(res => {
          this.loading = false;
          if (res.data.msg == "处理成功") {
            this.auditData = res.data.Data;
            //  this.totalPage = res.data.Data.TotalCount;
          } else {
            console.log("数据加载失败");
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message.error(err);
        });
    },
    //查看详情
    detail(row) {
      this.$router.push({
        name: "提交信息详情",
        params: { obj: row.ID, flag: 1 }
      });
    }
    //审核通过
    // publish(row) {
    //   editList({ ID: row.ID, Type: "published" })
    //     .then(res => {
    //       if (res.data.Success) {
    //         this.$message.success("发布成功！");
    //         this.getuserData();
    //       } else {
    //         this.$message.error(res.data.Error);
    //       }
    //     })
    //     .catch(err => {
    //       this.$message.error(err);
    //     });
    // },
    //审核驳回
    // unpublish(row) {
    //   editList({ ID: row.ID, Type: "unpublished" })
    //     .then(res => {
    //       if (res.data.Success) {
    //         this.$message.success("取消发布成功！");
    //         this.getuserData();
    //       } else {
    //         this.$message.error(res.data.Error);
    //       }
    //     })
    //     .catch(err => {
    //       this.$message.error(err);
    //     });
    // }
  }
};
</script>

<style lang="less" scoped>
.paginationW {
  float: right;
}
</style>
