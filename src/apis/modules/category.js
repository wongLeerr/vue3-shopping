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