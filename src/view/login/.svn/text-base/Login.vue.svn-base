<template>
  <div class="login">
        <div class="header">
           <div class="logo">
               <img  src="../../assets/logo.png" alt="">
           </div>
        </div>
        <div class="banner">
            <!-- <img src="../../assets/loginbg.jpg" alt="loginbg"> -->
            <el-form autocomplete="off" class="login_form" ref="loginForm" label-position="left" :rules="loginRules" :model="formLabelAlign">
                <el-form-item class="title">
                    <div>欢迎登录平台</div>
                </el-form-item>
                <el-form-item>
                    <i class="icon_user"><img src="../../assets/user.png" alt=""></i>
                    <el-input  autocomplete="off" placeholder="用户名" v-model="formLabelAlign.adminName"></el-input>
                </el-form-item>
                <el-form-item>
                   <i class="icon_password"><img src="../../assets/password.png" alt=""></i>
                    <el-input  autocomplete="off" placeholder="密码" v-model="formLabelAlign.adminPass" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="remberPaaword">记住密码</el-checkbox>
                </el-form-item>
                <el-form-item class="btn blockBtn">
                    <el-button type="primary" @click="gologin" :loading="loading">登&nbsp;&nbsp;录</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
import { utils } from "@/utils/utils";
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("请填写账号"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      remberPaaword: false,
      formLabelAlign: {
        adminName: "",
        adminPass: ""
      },
      loginRules: {
        adminName: [
          { required: true, trigger: "blur", validator: validateName }
        ],
        adminPass: [
          { required: true, trigger: "blur", validator: validatePass }
        ]
      }
    };
  },
  methods: {
    gologin() {
      let _this = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          this.$store
            .dispatch("Login", this.formLabelAlign)
            .then(res => {
              _this.loading = false;
              if (res.data.msg == "处理成功") {
                if (_this.remberPaaword) {
                  utils.user.set({
                    adminName: _this.formLabelAlign.adminName,
                    adminPass: _this.formLabelAlign.adminPass,
                    remberPaaword: _this.remberPaaword
                  });
                  
                }else{
                  utils.user.clear()
                }
                _this.$message.success("登录成功！");
                _this.$router.push({ path: "/" });
              } else {
                _this.$message.error(res.data.msg);
              }
            })
            .catch(err => {
              _this.loading = false;
              this.$message({
                message: "登录失败: 未知的用户名或错误密码或服务器错误！",
                type: "error",
                duration: 5 * 1000
              });
            });
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    let strogemsg = utils.user.get();
    if (strogemsg) {
      this.formLabelAlign.adminName = strogemsg.adminName;
      this.formLabelAlign.adminPass = strogemsg.adminPass;
      this.remberPaaword = strogemsg.remberPaaword;
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  min-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  .header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    .logo {
      width: 1200px;
      height: 100px;
      margin: 19px auto 0;
    }
  }
  .banner {
    height: 100%;
    position: relative;
    background: url('../../assets/loginbg.jpg') no-repeat center top;
    background-size:  100% auto;
    // img {
    //   display: block;
    //   width: 100%;
    //   height: 100%;
    // }
    .login_form {
      position: absolute;
      right: 0;
      top: 0;
      width: 326px;
      height: 318px;
      background: #fff;
      box-sizing: border-box;
      padding: 0 30px;
      border-radius: 5px;
      margin-top: 11.46%;
      margin-right: 22.4%;
      box-shadow: 0 0 30px #6f9ce0;
      .title {
        color: #00b5ff;
        margin-top: 30px;
        div {
          font-size: 18px;
          line-height: 1;
        }
      }
    }
  }
}
</style>
