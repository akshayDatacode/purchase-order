const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    id: { type: String },
    buyer: { type: String },
    seller: { type: String },
    products: { type: Array },
    status: { type: String },
  },
  {
    timestamps: [{ createdAt: "created_at", updatedAt: "updated_at" }],
  }
);

module.exports = mongoose.model("Order", orderSchema);
