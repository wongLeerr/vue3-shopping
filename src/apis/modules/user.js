import request from "../http";

export const loginAPI = (data) => {
    return request({
        url: '/login',
        method: 'post',
        data: {
            ...data
        }
    })
}