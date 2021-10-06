import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addOrder } from '../apiServices'


const AddOrder = () => {

  const [buyer, setBuyer] = useState('')
  const [seller, setSeller] = useState('')
  const [products, setProducts] = useState([])
  const [item, setItem] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      buyer,
      seller,
      products,
    }
    addOrder(data).then((res) => {
      if (res) {
        toast.success('Order successfully completed', {
          position: toast.POSITION.TOP_CENTER
        })
        setSeller('')
        setBuyer('')
        setProducts([])
      }
    })
  }

  const addproducts = () => {
    if (item !== '') {

      setProducts([...products, item])
      setItem('')
      setError('')
    } else {
      setError('Please add item')
    }
  }

  return (
    <>
      <div className="row p-3 m-0 d-flex justify-content-center">
        <div className="col-xs-12 col-sm-6 border my-5 p-md-5 p-3 shadow-lg rounded-lg ">
          <h3 className="text-center">Purchase Order</h3>
          <form>
            <div className="form-group my-3">
              <label>Buyer</label>
              <input type="text" onChange={(e) => setBuyer(e.target.value)} name="buyer" value={buyer} className="form-control" placeholder="Buyer" />
            </div>
            <div className="form-group my-3">
              <label>Seller</label>
              <input type="text" onChange={(e) => setSeller(e.target.value)} name="seller" value={seller} className="form-control" placeholder="Seller" />
            </div>

            <div className="row m-0">
              <div className="col-12">
                <ul>
                  {products && products.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="form-group my-3">
                  <label>Add Product</label>
                  <input type="text" onChange={(e) => setItem(e.target.value)} name="item" value={item} className="form-control" placeholder="Product" />
                  {<p className="text-danger">{error}</p>}
                  <button type="button" onClick={() => addproducts()} className="btn-sm btn-primary">Add</button>
                </div>

              </div>
            </div>
            <div className="row m-0">
              <div className="col-12 text-center">
                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-success">Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddOrder