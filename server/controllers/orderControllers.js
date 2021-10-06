const Order = require("../models/ordersModel");

const addOrder = async (req, res, next) => {
  const { id, seller, products, buyer } = req.body;
  const createdOrder = new Order({
    id,
    seller,
    products,
    buyer,
  });

  try {
    const order = await createdOrder.save();
    res.send({ order: order, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  return res.status(201).json({
    id,
    seller,
  });
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.send({ orders: orders, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addOrder = addOrder;
exports.getOrders = getOrders;
