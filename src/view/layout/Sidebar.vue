<template>
  <div class="sidebar">
    <el-scrollbar class="sidebar_inner">
      <el-menu  :default-active="$route.path" unique-opened router class="no_collapsed">
      <template v-for="(item, index) in permission_routers" v-if='!item.hidden'>
        <el-submenu :index="index+''" v-if="!item.noDropdown&&item.children.length>0" :key="index">
          <template slot="title" class="">
            <!-- :style="{backgroundImage: 'url('+require('../../assets/'+item.icon)+')'}" -->
            <i class="sidebar_icon"><img :src="require('../../assets/'+item.icon)" alt=""></i><span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="item.path+'/'+child.path" :key="child.path" v-if="!child.hidden&&permission(item.name,child)"> <i class="circular"></i>{{child.name}}<i class="el-submenu__icon-arrow el-icon-arrow-right"></i></el-menu-item>
        </el-submenu>
        <el-menu-item class=" " v-if="item.noDropdown&&item.children.length>0" :key="index" :index="item.path+'/'+item.children[0].path">
          <i class="sidebar_icon"><img :src="require('../../assets/'+item.icon)" alt=""></i><span>{{item.name}}</span><i class="el-submenu__icon-arrow el-icon-arrow-down" style="transform:rotate(-90deg)"></i></el-menu-item>
      </template>
    </el-menu>
    </el-scrollbar>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      fromMenuPath: this.$route.path
    };
  },
  computed: {
    ...mapGetters(["permission_routers","roles"])
  },
  methods: {
    permission: function(role, roleall) {
      let hasPermission = false;
      console.log(this.roles)
      if (role == "场站、管线基本信息录入") {
          for (var j = 0; j < this.roles.length; j++) {
            if(this.roles[j].excleTableName.indexOf(roleall.name)!=-1){
                hasPermission = true;
                break
          }
        }
      } else {
        return true;
      }
      return hasPermission;
    }
  },

};
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  left: 100%;
  top: 0;
  width: 300px;
  // float: left;
  height: 100%;
  box-sizing: border-box;
  padding-top: 35px;
  font-size: 14px;
  overflow: hidden;
  .sidebar_inner {
    background: #f4f4f4;
    height: 100%;
    box-sizing: border-box;
    border: solid 1px #e0e4e6;
    border-bottom: 0;
  }

  .circular {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a3afbb;
    margin-right: 12px;
    transition: all 0.3s;
  }
  span {
    display: table-cell;
    vertical-align: middle;
    height: 56px;
  }
  .sidebar_icon {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    // width: 36px;
    // height: 36px;
    img {
      margin-right: 5px;
      opacity: 0.2;
      transition: all 0.3s;
    }
    // &::after {
    //   content: " ";
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   z-index: 1;
    //   background: rgba(255, 255, 255, 0.8);
    // }
  }
}
</style>
