import axios from "axios";
const api = `http://www.localhost:5000/api`;

export const addOrder = (order) => {
  return axios
    .post(`${api}/add_order`, order)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("add order error", error);
    });
};

export const getOrders = () => {
  return axios
    .get(`${api}/get_orders`)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get orders error", error);
    });
};
