import request from "../http";

export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }