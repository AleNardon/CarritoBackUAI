import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const cartSchema = new Schema({
  productsDetail: [{product:String,productQuantity:Number,price:Number}], 
  total:Number
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Cart", cartSchema);
