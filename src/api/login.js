import fetch from '@/utils/fetch';

export function login(adminName, adminPass) {
  return fetch({
    url: '/api/v1/admin/account/ifLogin',
    method: 'post',
    data: {
      // "adminId": 0,
      "adminName": adminName,
      "adminPass": adminPass,
      // "adminState": "string",
      // "adminType": "string",
      // "createTime": "2018-10-26T13:32:00.115Z",
      // "operatorId": 0,
      // "roleId": 0,
      // "saltVal": "string",
      // "updateTime": "2018-10-26T13:32:00.115Z"
    }
  });
}
export function getInfo() {
  return fetch({
    url: '/api/User/GetUserInfo',
    method: 'get',
  });
}