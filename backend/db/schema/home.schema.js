// home.schema.js
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const homeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serviceType: { type: String },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  thumbnail: { type: Array },
  rooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  surface: { type: String, required: true },
  extras: { type: String, required: true },
});
homeSchema.plugin(mongoosePaginate)
const Home = mongoose.model("home", homeSchema);

export default Home;
