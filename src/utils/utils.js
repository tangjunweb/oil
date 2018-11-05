// token操作
import Cookies from 'js-cookie'

const TokenKey = 'admin-token'


export function getToken() {
  return Cookies.getJSON(TokenKey); 
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export const utils = {
  user: {
    get: function () {
      const info = window.localStorage.getItem('user');
      return info == null ? null : JSON.parse(info);
    },
    set: function (u) {
      window.localStorage.setItem('user',JSON.stringify(u));
    },
    clear: function () {
      window.localStorage.removeItem('user');
    }
  },
}

