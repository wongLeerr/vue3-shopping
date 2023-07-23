import request from "../http"

// 商品详情
export const getDetail = (id) => {
    return request({
      url: '/goods',
      params: {
        id
      }
    })
}
  
// 热榜
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}