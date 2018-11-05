import fetch from '@/utils/fetch';

//提交审核
export function putapproval(params) {
  return fetch({
    url: '/api/v1/approval/examine/submit',
    method: 'put',
    data: params
  });
}
//待审核
export function unaudited(params) {
  return fetch({
    url: '/api/v1/approval/examine/unaudited',
    method: 'get',
    params
  });
}
//查询审核结果

export function examineResult(params) {
  return fetch({
    url: '/api/v1/approval/examine/examineResult',
    method: 'get',
    params
  });
}
//审核，通过，驳回

export function examine(params) {
  return fetch({
    url: '/api/v1/approval/examine/examine',
    method: 'put',
    data: params
  });
}

//查询提交信息详情
export function info(params) {
  return fetch({
    url: '/api/v1/approval/examine/info',
    method: 'get',
    params
  });
}