
import fetch from '@/utils/fetch';

//查询所有账号
export function findAllAdmin() {
  return fetch({
    url: '/api/v1/admin/account/findAllAdmin',
    method: 'get',
  });
}

//添加管理员账号
export function addAdmin(adminName, adminPass, roleId) { 
  return fetch({
    url: '/api/v1/admin/account/addAdmin',
    method: 'post',
    data: {
      "adminName": adminName,
      "adminPass": adminPass,
      "roleId": roleId,
    }
  });
}

//删除账号
export function deleteAdmin(adminId) { 
  return fetch({
    url: '/api/v1/admin/account/deleteAdmin',
    method: 'delete',
    adminId
  });
}

//查询账号
export function findAllAdmin() { 
  return fetch({
    url: '/api/v1/admin/account/findAllAdmin',
    method: 'get'
  });
}

//管理员登录
// export function ifLogin(adminName, adminPass, roleId) { 
//   return fetch({
//     url: '/api/v1/admin/account/ifLogin',
//     method: 'post',
//   });
// }

//注销
export function ifLogout() { 
  return fetch({
    url: '/api/v1/admin/account/ifLogout',
    method: 'get'
  });
}

//修改密码，不校验
export function login(adminId,adminName, adminPass) { 
  return fetch({
    url: '/api/v1/admin/account/addAdmin',
    method: 'put',
    data: {
      "adminId": adminId,
      "adminName": adminName,
      "adminPass": adminPass
    }
  });
}


//修改密码，校验原密码
export function login(oldAdminPass, newAdminPass) { 
  return fetch({
    url: '/api/v1/admin/account/addAdmin',
    method: 'put',
    data: {
      "adminName": oldAdminPass,
      "adminPass": newAdminPass
    }
  });
}


