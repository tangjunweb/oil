<template>
  <div>
    <el-row class="white">
      <el-col :span="24">
        <Title name="场站信息">
          <div class="opration">
              <el-button v-if="" class="search_btn btn"><i><img src="../../../assets/icon_save.png" alt=""></i> 查询</el-button>
              <el-button v-if="" class="export btn"><i><img src="../../../assets/icon_save.png" alt=""></i>导出</el-button>
          </div>
        </Title>
        <Auditsearch></Auditsearch>
      </el-col>
    </el-row>
    <el-row class="white nogap">
      <el-col :span="24">
        <Title name="审核查询"></Title>
            <el-table :data="auditData" v-loading="loading" border  element-loading-text="拼命加载中" style="width: 100%">
                <el-table-column  prop="ID" label="ID"></el-table-column>
                <el-table-column  prop="title" label="标题"></el-table-column>
                <el-table-column prop="CreatedTime" label="最后修改时间"></el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button @click="detail(scope.row)" type="text" size="small">查看详情</el-button>                                       
                    </template>
                </el-table-column>
            </el-table>
            <div v-show="totalPage>PageCount" class="paginationW">
                <el-pagination  background  @current-change="CurChange" :current-page.sync="currentPage"  :page-size="PageCount" :total="totalPage" layout="prev, pager, next"></el-pagination>
            </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import Auditsearch from "@/components/Auditsearch";
import { putapproval, unaudited } from "@/api/audit";
export default {
  components: {
    Auditsearch
  },
  data() {
    return {
      auditData: [
        {
          ID: 1,
          title: "基本信息",
          CreatedTime: "2018.10.5"
        },
        {
          ID: 2,
          title: "基本信息",
          CreatedTime: "2018.10.5"
        },
        {
          ID: 3,
          title: "基本信息",
          CreatedTime: "2018.10.5"
        },
        {
          ID: 4,
          title: "基本信息",
          CreatedTime: "2018.10.5"
        },
      ],
      PageIndex: 1,
      PageCount: 5,
      // 当前页
      currentPage: 1,
      // 分页
      loading: false,
      totalPage: 10,
      year: "2016.06.04",
      stationId: "",
      taskAreaId: ""
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
      this.loading = true;
      let params = {
        year: this.year,
        stationId: this.stationId,
        taskAreaId: this.taskAreaId
      };
      unaudited(params)
        .then(res => {
          this.loading = false;
          if (res.data.msg == "处理成功") {
            this.auditData = res.data.Data.List;
            this.totalPage = this.totalPage;
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
      console.log(row);
      this.$router.push({ name: "审核", params: { obj: row.ID, flag: 1 } });
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
.opration {
  margin-top: 3px;
  float: right;
}
.paginationW {
  float: right;
}
</style>
