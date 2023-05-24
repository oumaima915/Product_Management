const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  username: String,
  product: String,
});

module.exports = { Order };