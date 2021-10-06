import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import AddOrder from "./components/AddOrder.jsx";
import Orders from "./components/Orders.jsx";

const App = () => {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <>
      <ToastContainer />
      <AddOrder />
      <div className="row m-0">
        <div className="col-12 p-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowOrders(!showOrders)}
          >
            Show Orders List
          </button>
        </div>
      </div>
      {showOrders && <Orders />}
    </>
  );
};

export default App;
