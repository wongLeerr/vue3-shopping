import request from "../http";

// 生成-订单(结算页)
export const getOrderInfoAPI = () => {
    return request({
        url: '/member/order/pre',
        method: 'get',
    })
}

// 提交订单 
export const submitOrderToGetPayOrder = (data) => {
    return request({
        url: '/member/order',
        method: 'post',
        data
    })
}