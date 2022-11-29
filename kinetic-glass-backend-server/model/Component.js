const mongoose = require("mongoose");

const componentSchema = mongoose.Schema(
  {
     title:{type: String, required: true},
     description:{type: String, required: true},
     code:{type: String, required: true},
     componentType:{type: String,required: true},
     isPaid:{type: Boolean},
     price:{type: Number},
     sellerId:{type: mongoose.SchemaTypes.ObjectId, required: true},
     themeFile:{type: String},
     previewLink:{type: String}
  }
  );
const component = mongoose.model("Component", componentSchema);
module.exports = component;
