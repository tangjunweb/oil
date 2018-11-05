<template>
    <div class="ly_topMsg">
        <div class="container">
            <div class="logo">
                <img class="iconLogin" src="../../assets/icon_logo.png" alt="">
                <span class="bright">西南油气田环境风险评估管理平台</span>
                <span class="gap">|</span>
                <span>川中油气矿(A场站)</span>
            </div>
            <div class="lognMsg">
                 <span class="bright userInfo">{{name}}</span>
                 上次登录时间：<span>2018-06-20</span>
                <a class="login_out" href="javascript:void(0)">
                <img src="../../assets/login_out.png"></a>
            </div>  
        </div>
      
    </div>
</template>
 
<script>
export default {
  data() {
    return {
        name:''
    };
  },
  mounted(){
      this.name = this.$store.getters.token.roles[0].roleName
  }
};
</script>

<style lang="less" scoped>
.ly_topMsg {
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height: 50px;
  line-height: 50px;
  background: #353638;
  color: #999999;
  border-bottom: 6px solid #c8000b;
  z-index:99;
  .container {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding:0 10px;
    .bright{
        color:#fff;
    }
    .logo{
        float: left;
        .iconLogin{
            float: left;
            margin-top:8px;
            margin-right: 5px;
        }
        span{
            font-size: 18px;
        }
        .bright,
        .gap{
            font-size: 20px;
        }
    }
    .lognMsg{
        float: right;
         font-size: 12px;
        img{
            vertical-align: middle;
        }
        .userInfo{
            margin-right: 15px;
        }
        .login_out{
            margin-left:35px;
        }
        
    }
  }
}
</style>
