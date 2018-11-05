<template>
    <el-scrollbar class="layout">
        <Headerbar/>
          <div class="aside">
            <Sidebar/>
          </div>
          <div class="ly_content">
            <div class="main_container">
                  <Breadcrumb/>
                  <Appmain/>
            </div>
          </div>
        
        <!-- <el-row class="ly_content" type="flex" justify="start">
          <el-col>
            
          </el-col>
          <el-col>
            <div class="main_container">
                  <Breadcrumb/>
                  <Appmain/>
            </div>
          </el-col>
        </el-row> -->
    </el-scrollbar>
</template>
<script>
import { Headerbar, Sidebar, Appmain,Breadcrumb } from "@/view/layout";
export default {
  data() {
    return {};
  },
  components: {
    Headerbar,
    Sidebar,
    Appmain,
    Breadcrumb
  }
};
</script>
<style lang="less">
.layout{
  width:100%;
  height:100%;
}
.aside{
  position: absolute;
  left:50%;
  margin-left:-600px;
  top:56px;
  bottom:0;
  transform: translateX(-100%);
  width:1200px;
  z-index: 10;
}
.ly_content {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  min-height:100%;
  padding-top:  56px;
  &::after {
    clear: both;
    overflow: hidden;
    display: block;
    height: 0px;
    visibility: hidden;
    border: 0px;
    content: " ";
  }
}
.main_container{
    position: relative;
    width:880px;
    float: right;
    box-sizing: border-box;
    padding-top:35px;
}
</style>


