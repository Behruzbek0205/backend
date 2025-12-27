const { Schema } = require("mongoose");
const eduScheme = new Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  center_name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
  },
  rating: {
    type: Number,
  },
});
