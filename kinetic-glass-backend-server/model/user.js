const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    components:[
        {componentId: { type: mongoose.SchemaTypes.ObjectId, ref:'Component'}}
    ]
  }
  );
const user = mongoose.model("User", userSchema);
module.exports = user;
