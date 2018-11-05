import {
  login,
  getInfo
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken,
  utils
} from '@/utils/utils'
import { findStru } from "@/api/msgInput";
import router from '@/router'

const user = {
  state: {
    token: getToken(), //token 存cookie
    userName: '',
    avatar: '',
    roles: [], //左侧导航填表顺序 --不存本地
    user: null,

  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_NAV: (state, roles) => {

      state.roles = roles;

    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      const accountName = userInfo.adminName.trim();
      const password = userInfo.adminPass.trim();
      return new Promise((resolve, reject) => {
        login(accountName, password).then(res => {
          if (res.data.msg == '处理成功') {

            commit('SET_USER', res.data.data) //单独存用户信息
            setToken(res.data.data)
            // commit('SET_TOKEN',res.data.data)//单独存token
            
          }
          resolve(res);
        }).catch(err => {
          console.log('调用登录接口失败')
          reject(err);
        })
      })
    },
    SET_NAV({
      commit,
      state
    }, data) {
      return new Promise((resolve, reject) => {
        findStru({
          json: {
            stationId: 1
          }
        }).then(res => {
          console.log(res.data.data.excleTablesBasic)
           commit('SET_NAV', res.data.data.excleTablesBasic);
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    },
    //获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          commit('SET_USERNAME', res.data.UserName);
          commit('SET_ROLES', [res.data.RoleName]);

          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    },
    // 前端 退出账号
    FedLoginOut({
      commit
    }) {
      return new Promise(resolve => {
        removeToken();
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        router.push({
          path: '/login'
        });
        resolve();
      });
    }
  }
}

export default user
