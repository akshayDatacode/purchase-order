const express = require("express");
const orderControllers = require("../controllers/orderControllers");

const router = express.Router();

router.post("/add_order", orderControllers.addOrder);
router.get("/get_orders", orderControllers.getOrders);

module.exports = router;
