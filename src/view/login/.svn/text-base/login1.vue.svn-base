<template>
  <div class="myform">
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
      <colgroup>
        <col v-for="(ele,index) in mydata[0]" :width="index==0?50:''" :key="index">
      </colgroup>
      <tbody>
        <tr v-for="(ele,index) in mydata" :key="index">
          <td v-for="(ele1,index1) in ele" @focus="isLocked = true"
            @blur="isLocked = false" :contenteditable="ele1.onlyRead == 'false'"  @click="getinput(index,index1,ele1)" @input="changeText($event,ele1)"  v-if="!ele1.isgap" :class="ele1.tableHead=='true'?'ishead':''"
            :rowspan="ele1.endRow-ele1.startRow+1" :colspan="ele1.endCol-ele1.startCol+1" :key="index1">
            <!-- 选中单元格编辑 -->
            <!-- <template v-if="ele1.isedit">
                <input type="text">
            </template> -->  

           <template v-if="!computeddata(ele1)">
            <div class="ceil" v-html="ele1.databind">

              </div>
            </template>   
            <template v-if="computeddata(ele1) == 'headtrue'">
                <div class="ceil" :class="ele1.startRow==0?'tabletitle':''">
                  {{ele1.cellMsg}}
                </div>
            </template>                                      
           <template v-if="ele1.isedit">
              <!-- 普通文本 -->

              <!-- 单选下拉 -->
              <template v-if="ele1.cellType == '2'">
                <div class="ceil">
                  <el-select v-model="ele1.databind" placeholder="请选择">
                    <el-option
                      v-for="item in ele1.cellMsg"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </div>
              </template>
              <!-- 下拉多选 -->
              <template v-if="ele1.cellType == '3'">
                <div class="ceil">
                </div>
              </template>
              <!-- 图片上传 -->
              <template v-if="ele1.cellType == '4'">
                <div class="ceil">
                </div>
              </template>
            </template>
            <template v-else>
              <!-- <template v-else-if="computeddata(ele1) == 'headfalse'">
                <div class="ceil">
                    {{ele1.cellMsg}} {{ele1.ceildata?ele1.ceildata.cellMsg:''}}
                </div>
              </template>
              <template v-else> 
                <div class="ceil">
                    {{ele1.ceildata?ele1.ceildata.cellMsg:''}}
                </div>
              </template> -->
            </template>
            <!-- <template v-if="ele1.cellType == '2'">
              <el-select v-model="ele1.data_bind" placeholder="请选择">
                <el-option v-for="item in ele1.cellMsg" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </template>

            <div v-else :class="ele1.startRow==0?'title':''">
              <template>
                {{ele1.tableHead=='true'? ele1.cellMsg:(ele1.ceildata?ele1.ceildata.cellMsg:'')}}
              </template>

            </div> -->
          </td>
        </tr>
      </tbody>
    </table>
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="1000px" :before-close="handleClose">
      <div class="edit">
        <el-row type="flex" justify="space-between">
          <el-col :span="8" class="editleft">
            <h3>设置类型</h3>
            <ul>
              <li v-for="(item,index) in form_item" :key="index">
                <el-radio v-model="radioselect" :label="item.cellType" border>{{item.name}}</el-radio>
              </li>
            </ul>
          </el-col>
          <el-col :span="14">
            <el-form :model="form_item">
              <el-form-item v-for="(item,index) in form_item" :key="index" v-if="item.cellType == radioselect">
                <el-input v-if="item.cellType == '1'" size="medium" type="textarea" autosize placeholder="请输入内容"
                  v-model="item.value">
                </el-input>
                <el-select v-if="item.cellType == '2'" v-model="item.value" placeholder="请选择">
                  <el-option v-for="(drop,dropitem) in item.drop" :key="dropitem" :label="drop.label" :value="item.label">
                  </el-option>
                </el-select>
                <el-date-picker v-if="item.cellType == '5'" v-model="value1" type="date" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button type="warning">取消</el-button>
                <el-button type="danger" @click="resetForm('form_item')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-dialog>


  </div>
</template>

<script>
export default {
  data() {
    return {
      isLocked: false,
      radioselect: "",
      form_item: [
        {
          name: "文本输入",
          type: "input",
          cellType: "1",
          value: ""
        },
        {
          name: "下拉选择",
          type: "select",
          cellType: "2",
          value: "",
          drop: []
        },
        {
          name: "上传域",
          type: "file",
          cellType: "4"
        },
        {
          name: "日期控件",
          type: "data",
          cellType: "5"
        }
      ],

      dialogVisible: false,
      tableCellRecords: [
        {
          tableCellRecordId: 38,
          tableRecordId: 17,
          excleTableStructureId: 34092,
          cellMsg: "川中油气矿（测试数据）",
          founderId: 114,
          createTime: 1539945417000,
          cellState: "1"
        },
        {
          tableCellRecordId: 39,
          tableRecordId: 17,
          excleTableStructureId: 34099,
          cellMsg: "2018.10.15",
          founderId: 114,
          createTime: 1539945417000,
          cellState: "1"
        },
        {
          tableCellRecordId: 39,
          tableRecordId: 17,
          excleTableStructureId: 34101,
          cellMsg: "是",
          founderId: 114,
          createTime: 1539945417000,
          cellState: "1"
        }
      ],
      excleTableStructures: [
        {
          excleTableStructureId: 34069,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 0,
          endCol: 6,
          cellMsg: "表1  基本信息统计表",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34070,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34071,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 2,
          endCol: 2,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34072,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34073,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 4,
          endCol: 4,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34074,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34075,
          excleTableId: 111,
          startRow: 0,
          endRow: 0,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34076,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 0,
          endCol: 0,
          cellMsg: "序号",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34077,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 1,
          endCol: 1,
          cellMsg: "类别",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34078,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 2,
          endCol: 5,
          cellMsg: "填写内容",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34079,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34080,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 4,
          endCol: 4,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34081,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34082,
          excleTableId: 111,
          startRow: 1,
          endRow: 1,
          startCol: 6,
          endCol: 6,
          cellMsg: "填写说明",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34083,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 0,
          endCol: 0,
          cellMsg: "1",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34084,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 1,
          endCol: 1,
          cellMsg: "场站名称",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34085,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 2,
          endCol: 2,
          cellMsg: "调用场站名称",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34086,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 3,
          endCol: 3,
          cellMsg: "所在地（行政区划）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34087,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 4,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34088,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34089,
          excleTableId: 111,
          startRow: 2,
          endRow: 2,
          startCol: 6,
          endCol: 6,
          cellMsg: "如××市××区/县××乡/镇××村××社",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34090,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 0,
          endCol: 0,
          cellMsg: "2",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34091,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 1,
          endCol: 1,
          cellMsg: "场站所属单位",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34092,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 2,
          endCol: 2,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34093,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 3,
          endCol: 3,
          cellMsg: "场站所属作业区",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34094,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 4,
          endCol: 4,
          cellMsg: "调用作业区名称",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34095,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34096,
          excleTableId: 111,
          startRow: 3,
          endRow: 3,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34097,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 0,
          endCol: 0,
          cellMsg: "3",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34098,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 1,
          endCol: 1,
          cellMsg: "投产年月日",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34099,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 2,
          endCol: 2,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34100,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 3,
          endCol: 3,
          cellMsg: "环评开展情况（请选择）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34101,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 4,
          endCol: 4,
          cellMsg: "[是, 否]",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "2"
        },
        {
          excleTableStructureId: 34102,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 5,
          endCol: 5,
          cellMsg: "收集批复文件",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "4"
        },
        {
          excleTableStructureId: 34103,
          excleTableId: 111,
          startRow: 4,
          endRow: 4,
          startCol: 6,
          endCol: 6,
          cellMsg:
            "如果没有开展环评，附件1-1这个附件可空缺，别的资料不能占用这个编号,其他附件道理相同",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34104,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 0,
          endCol: 0,
          cellMsg: "4",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34105,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 1,
          endCol: 1,
          cellMsg: "改扩建年月日（非大修）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34106,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 2,
          endCol: 2,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34107,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 3,
          endCol: 3,
          cellMsg: "环评开展情况（请选择）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34108,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 4,
          endCol: 4,
          cellMsg: "[是, 否]",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "2"
        },
        {
          excleTableStructureId: 34109,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 5,
          endCol: 5,
          cellMsg: "收集批复文件",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "4"
        },
        {
          excleTableStructureId: 34110,
          excleTableId: 111,
          startRow: 5,
          endRow: 5,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34111,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 0,
          endCol: 0,
          cellMsg: "5",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34112,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 1,
          endCol: 1,
          cellMsg: "设计产品气",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34113,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 2,
          endCol: 2,
          cellMsg: "气量( m3/d)：",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34114,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 3,
          endCol: 3,
          cellMsg: "压力(Mpa):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34115,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 4,
          endCol: 4,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34116,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34117,
          excleTableId: 111,
          startRow: 6,
          endRow: 6,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34118,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 0,
          endCol: 0,
          cellMsg: "6",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34119,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 1,
          endCol: 1,
          cellMsg: "设计稳定凝析油",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34120,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 2,
          endCol: 2,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34121,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 3,
          endCol: 3,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34122,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 4,
          endCol: 4,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34123,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34124,
          excleTableId: 111,
          startRow: 7,
          endRow: 7,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34125,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 0,
          endCol: 0,
          cellMsg: "7",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34126,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 1,
          endCol: 1,
          cellMsg: "设计液化气",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34127,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 2,
          endCol: 2,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34128,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 3,
          endCol: 3,
          cellMsg: "设计稳定轻烃",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34129,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 4,
          endCol: 4,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34130,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34131,
          excleTableId: 111,
          startRow: 8,
          endRow: 8,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34132,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 0,
          endCol: 0,
          cellMsg: "8",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34133,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 1,
          endCol: 1,
          cellMsg: "实际产品气",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34134,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 2,
          endCol: 2,
          cellMsg: "气量(m3/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34135,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 3,
          endCol: 3,
          cellMsg: "压力(Mpa):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34136,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 4,
          endCol: 4,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34137,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34138,
          excleTableId: 111,
          startRow: 9,
          endRow: 9,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34139,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 0,
          endCol: 0,
          cellMsg: "9",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34140,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 1,
          endCol: 1,
          cellMsg: "实际稳定凝析油",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34141,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 2,
          endCol: 2,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34142,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 3,
          endCol: 3,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34143,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 4,
          endCol: 4,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34144,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34145,
          excleTableId: 111,
          startRow: 10,
          endRow: 10,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34146,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 0,
          endCol: 0,
          cellMsg: "10",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34147,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 1,
          endCol: 1,
          cellMsg: "实际液化气",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34148,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 2,
          endCol: 2,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34149,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 3,
          endCol: 3,
          cellMsg: "实际稳定轻烃",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34150,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 4,
          endCol: 4,
          cellMsg: "产量(t/d):",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34151,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34152,
          excleTableId: 111,
          startRow: 11,
          endRow: 11,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34153,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 0,
          endCol: 0,
          cellMsg: "11",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34154,
          excleTableId: 111,
          startRow: 12,
          endRow: 20,
          startCol: 1,
          endCol: 1,
          cellMsg: "含油/水装置容积或尺寸",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34155,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 2,
          endCol: 2,
          cellMsg: "气田水水罐",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34156,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 3,
          endCol: 3,
          cellMsg: "（）个，（）m3/个",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34157,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 4,
          endCol: 4,
          cellMsg: "是否配有废气放散管",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34158,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 5,
          endCol: 5,
          cellMsg: "是/否",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34159,
          excleTableId: 111,
          startRow: 12,
          endRow: 12,
          startCol: 6,
          endCol: 6,
          cellMsg: "若气田水罐不止一个且容积不等，应分别记录",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34160,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 0,
          endCol: 0,
          cellMsg: "12",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34161,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34162,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 2,
          endCol: 2,
          cellMsg: "废气放散管内径（mm）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34163,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34164,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 4,
          endCol: 4,
          cellMsg: "废气放散管高度（m）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34165,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34166,
          excleTableId: 111,
          startRow: 13,
          endRow: 13,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34167,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 0,
          endCol: 0,
          cellMsg: "13",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34168,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34169,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 2,
          endCol: 2,
          cellMsg: "检修池容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34170,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34171,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 4,
          endCol: 4,
          cellMsg: "转输污水池容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34172,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34173,
          excleTableId: 111,
          startRow: 14,
          endRow: 14,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34174,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 0,
          endCol: 0,
          cellMsg: "14",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34175,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34176,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 2,
          endCol: 2,
          cellMsg: "事故池容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34177,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34178,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 4,
          endCol: 4,
          cellMsg: "生化处理系统涉液池容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34179,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34180,
          excleTableId: 111,
          startRow: 15,
          endRow: 15,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34181,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 0,
          endCol: 0,
          cellMsg: "15",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34182,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34183,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 2,
          endCol: 2,
          cellMsg: "脱烃及轻烃回收装置涉液塔、罐容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34184,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34185,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 4,
          endCol: 4,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34186,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34187,
          excleTableId: 111,
          startRow: 16,
          endRow: 16,
          startCol: 6,
          endCol: 6,
          cellMsg: "如脱烃塔、脱乙烷塔、脱丁烷塔及回流罐等之和",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34188,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 0,
          endCol: 0,
          cellMsg: "16",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34189,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34190,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 2,
          endCol: 2,
          cellMsg: "液体冷剂储罐容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34191,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34192,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 4,
          endCol: 4,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34193,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 5,
          endCol: 5,
          cellMsg: "/",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34194,
          excleTableId: 111,
          startRow: 17,
          endRow: 17,
          startCol: 6,
          endCol: 6,
          cellMsg: "如乙烯储罐、丙烷储罐及正丁烷储罐",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34195,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 0,
          endCol: 0,
          cellMsg: "17",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34196,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34197,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 2,
          endCol: 2,
          cellMsg:
            "凝析油处置装置涉液罐（段塞流捕集器、三相分离器、稳定塔等）m3",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34198,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34199,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 4,
          endCol: 4,
          cellMsg: "导热油系统涉液罐（导热油槽）（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34200,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34201,
          excleTableId: 111,
          startRow: 18,
          endRow: 18,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34202,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 0,
          endCol: 0,
          cellMsg: "18",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34203,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34204,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 2,
          endCol: 2,
          cellMsg: "凝析油罐容积",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34205,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 3,
          endCol: 3,
          cellMsg: "（）个，（）m3/个",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34206,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 4,
          endCol: 4,
          cellMsg: "凝析油罐围堰容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34207,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34208,
          excleTableId: 111,
          startRow: 19,
          endRow: 19,
          startCol: 6,
          endCol: 6,
          cellMsg: "若凝析油罐不止1个且容积不等，应分别记录",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34209,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 0,
          endCol: 0,
          cellMsg: "19",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34210,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 1,
          endCol: 1,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34211,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 2,
          endCol: 2,
          cellMsg: "轻质油罐容积",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34212,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 3,
          endCol: 3,
          cellMsg: "（）个，（）m3/个",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34213,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 4,
          endCol: 4,
          cellMsg: "轻质油罐围堰容积（m3）",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34214,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 5,
          endCol: 5,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34215,
          excleTableId: 111,
          startRow: 20,
          endRow: 20,
          startCol: 6,
          endCol: 6,
          cellMsg: "若轻质油罐不止1个且容积不等，应分别记录",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34216,
          excleTableId: 111,
          startRow: 21,
          endRow: 22,
          startCol: 0,
          endCol: 0,
          cellMsg: "20",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34217,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 1,
          endCol: 1,
          cellMsg: "填表人",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34218,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 2,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34219,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34220,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 4,
          endCol: 4,
          cellMsg: "审核人",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34221,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 5,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34222,
          excleTableId: 111,
          startRow: 21,
          endRow: 21,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34223,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 0,
          endCol: 0,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34224,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 1,
          endCol: 1,
          cellMsg: "填表人电话",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34225,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 2,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34226,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 3,
          endCol: 3,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34227,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 4,
          endCol: 4,
          cellMsg: "审核人电话",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "true",
          tableHead: "true",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34228,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 5,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        },
        {
          excleTableStructureId: 34229,
          excleTableId: 111,
          startRow: 22,
          endRow: 22,
          startCol: 6,
          endCol: 6,
          cellMsg: "",
          cellHeight: null,
          cellWidth: null,
          onlyRead: "false",
          tableHead: "false",
          hidden: "false",
          cellType: "1"
        }
      ],
      isedit: false, //是否开启编辑模式
      mydata: [] //表处理后的数据
    };
  },
  methods: {
    changeText(e, el) {
      if (!this.isLocked) {
        el.ceildata.cellMsg = this.getInnerText(e.target);
      }
    },
    getInnerText(element) {
      return typeof element.textContent == "string"
        ? element.textContent
        : element.innerText;
    },
    computeddata(data) {
      /**三种情况
          1 head onlyread:true 可不不可以输入
          2 head onlyRead:false 头部可以输入
            onlyRead: "true",
            tableHead: "true",
            hidden: "false",
         */
      if (
        data.cellType == 1 &&
        data.tableHead == "true" &&
        data.onlyRead == "true"
      ) {
        return "headtrue";
      }
      if (
        data.cellType == 1 &&
        data.tableHead == "true" &&
        data.onlyRead == "false"
      ) {
        return "headfalse";
      }
      return false
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.dialogVisible = false;
    },
    getinput(index, index1, val) {
      let str = Object.assign({}, val, { isedit: true });
      // 点击判断是否是编辑模式
      if (this.isedit) {
        return false;
      } else {
        console.log(str);
        this.$set(this.mydata[index], index1, str);
      }
    },
    getInfo(value) {
      this.radioselect = value.cellType;
      if (value.cellType == 1) {
        this.form_item[0].value = value.ceildata
          ? value.ceildata.cellMsg
          : value.cellMsg;
      }
      this.dialogVisible = true;
    },
    cloneData(original) {
      // 添加一个modal标题
      original.obj.modalTitle = original.obj.label || "";
      // 深拷贝对象，防止默认空对象被更改
      return JSON.parse(JSON.stringify(original));
    },
    dragOptions1() {
      return {
        animation: 0,
        ghostClass: "ghost",
        // 分组
        group: {
          name: "shared",
          pull: "clone",
          revertClone: false
        },
        // 禁止拖动排序
        sort: false
      };
    }
  },
  mounted() {
    let lhis = this;
    // 结构与数据合并
    // 下转换为二位数组
    lhis.excleTableStructures.map((ele, index) => {
      ele.isedit = false;
      if (ele.cellType == "2") {
        ele.cellMsg = ele.cellMsg.replace(/(\[|\])/g, "").split(",");
        ele.databind = "";
      }
      if(ele.tableHead == "false"&&ele.cellType == "1"&&ele.onlyRead == "false"){
        ele.databind  = "";
      }
      // 表数据套到表结构中
      // if (ele.tableHead == "false") {
      lhis.tableCellRecords.map((ele1, index1) => {
        if (ele.excleTableStructureId == ele1.excleTableStructureId) {
          if ("databind" in ele) {
            ele.databind = ele1.cellMsg;
          }
          ele.ceildata = ele1;
        }
      });
      // }
      if (lhis.mydata[ele.startRow]) {
        lhis.mydata[ele.startRow].push(ele);
      } else {
        lhis.mydata.push([ele]);
      }
    });
    // 合并
    this.mydata.map((ele, index) => {
      ele.map((item, num) => {
        if (item["startRow"] == item["endRow"]) {
          if (item["startCol"] != item["endCol"]) {
            for (let i = 0; i < item["endCol"] - item["startCol"]; i++) {
              this.mydata[index][num - 0 + i + 1].isgap = true;
            }
          }
        } else {
          for (let i = 0; i < item["endRow"] - item["startRow"]; i++) {
            this.mydata[index - 0 + i + 1][num].isgap = true;
          }
          if (item["startCol"] != item["endCol"]) {
            for (let i = 0; i < item["endCol"] - item["startCol"]; i++) {
              this.mydata[index][num - 0 + i + 1].isgap = true;
            }
          }
        }
      });
    });

    console.log(this.mydata);
  }
};
</script>
<style lang="less">
.myform {
  > table {
    margin-top: 30px;
    table-layout: fixed;
    border-collapse: separate;
    border-top: 1px solid #333333;
    border-left: 1px solid #333;

    td {
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      user-select: none;
      box-sizing: border-box;
      // background-color: #f5f7fa;
      color: #00f;
      border-bottom: 1px solid #333; //ebeef5
      border-right: 1px solid #333;

      > div {
        width: 100%;
        font-size: 12px;
        text-align: center;
        // box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        // line-height: 23px;
        padding: 12px;
      }
    }

    .ishead > div {
      color: #333;

      // font-weight: bold;
      &.tabletitle {
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
}

.edit {
  .editleft {
    border-right: 1px solid #eee;
  }

  li {
    margin-top: 10px;
  }
}
</style>