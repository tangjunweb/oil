
import fetch from '@/utils/fetch';
//查询所有角色信息
export function findAllRole() {
  return fetch({
    url: '/api/v1/admin/rolepower/findAllRole',
    method: 'get',
  });
}

//根据id查询权限
export function findModularByRoleId(params) { 
  return fetch({
    url: '/api/v1/admin/rolepower/findModularByRoleId',
    method: 'get',
    params
  });
}

//新增角色
export function addRole(roleName, roleDescriptionName,) { 
  return fetch({
    url: '/api/v1/admin/rolepower/addRole',
    method: 'post',
    data:{
      "roleName":roleName,
      "roleDescriptionName":roleDescriptionName
    }
  });
}

//删除角色
export function deleteRole(params) { 
  return fetch({
    url: '/api/v1/admin/rolepower/deleteRole',
    method: 'get',
    params
  });
}
//从新读取权限信息
export function readRolePower() { 
  return fetch({
    url: '/api/v1/admin/rolepower/readRolePower',
    method: 'get'
  });
}
//根据角色ID修改角色权限
export function updateModular(roleId,modularIds) { 
  return fetch({
    url: '/api/v1/admin/rolepower/updateModular',
    method: 'get',
    data:{
      "roleId":roleId,
      "modularIds":modularIds
    }
  });
}