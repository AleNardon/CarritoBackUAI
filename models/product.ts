import { Schema, model } from "mongoose";
interface IProduct {
  name:string , // String is shorthand for {type: String}
  stock:number,
  price: number,
  provider:string
}
// declaro la estructura que va a tener mi esquema/documento/tabla.
const ProductSchema = new Schema({
  name:{type:String, require:true} , // String is shorthand for {type: String}
  stock:{type: Number, default: 0},
  price: {type: Number, default: 0} ,
  provider:String
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model<IProduct>("Product", ProductSchema);
