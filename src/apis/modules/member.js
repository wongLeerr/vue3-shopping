// 会员中心下 我的订单和我的信息接口都在这里

import request from "../http";

export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
}
  

export const getUserOrder = (params) => {
  return request({
    url:'/member/order',
    method:'GET',
    params
  })
}