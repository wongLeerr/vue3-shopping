import request from "../http";

// 获取二级分类列表
export const getCategoryListAPI = (id) => {
    return request({
        url: '/category',
        method: 'get',
        params: {
            id
        }
    })
}

// 获取二级分类列表数据 /category/sub/filter
export const getCategoryFilterAPI = (id) => {
    return request({
        url: '/category/sub/filter',
        method: 'get',
        params: {
            id
        }
    })
}

// 获取导航数据
export const getSubCategoryAPI = (data) => {
    return request({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }