import request from "../http";

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}