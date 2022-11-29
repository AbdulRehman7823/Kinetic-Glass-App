const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    buyerId:  { type: mongoose.SchemaTypes.ObjectId, ref:'User'},
    sellerId: { type: mongoose.SchemaTypes.ObjectId, ref:'User'},
    component:{type: mongoose.SchemaTypes.ObjectId,ref:'Component'}
  },
  {timestamp:true}
  );
const order = mongoose.model("Order", orderSchema);
module.exports = order;
