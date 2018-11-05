
import fetch from '@/utils/fetch';

export function findStru(params) {
  return fetch({
    url: '/api/v1/common/excel/findExcleSort',
    method: 'get',
    params
  });
}