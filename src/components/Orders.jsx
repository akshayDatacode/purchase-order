import React, { useEffect, useState } from 'react'
import { getOrders } from '../apiServices'

const Orders = () => {
  const [orders, setOrders] = useState()

  useEffect(() => {
    getOrders().then((res) => {
      if (res) {
        setOrders(res.data.orders)
      }
    })
  }, [])

  return (
    <>
      <h1 className="my-3 text-center">Orders List</h1>
      {orders && orders.map((item, i) => (
        <div key={i} className="row mx-0 p-md-5 p-2 d-flex justify-content-center">
          <div className="col-md-4 col-12 p-2 border rounded bg-dark">
            <label className="text-white">Buyer</label>
            <h6 className="p-2 text-white"><span>-- {item.buyer}</span></h6>
            <label className="text-white">Seller</label>
            <h6 className="p-2 text-white"><span>-- {item.seller}</span></h6>
            <label className="text-white mb-2">Products</label>
            <ul>
              {item.products.map((item, i) => (
                <li key={i} className="text-success">{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-2 col-12 border rounded bg-dark d-flex align-items-center p-2">
            <button className="btn btn-primary">Order Completed</button>
          </div>
        </div>
      ))
      }

    </>
  )
}
export default Orders