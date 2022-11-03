import { Schema, model } from "mongoose";
interface IproductsDetail {
  product:string,
  productQuantity:number,
  price:number

}

interface ICart {
  productsDetail : Array<IproductsDetail>,
  total : number
}
// declaro la estructura que va a tener mi esquema/documento/tabla.
const cartSchema = new Schema({
  productsDetail: {type:[{
    product:String,
    productQuantity:{type:Number, required:true},
    price:Number
  }] , default:[]}, 
  total:{type:Number, default:0}
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model<ICart>("Cart", cartSchema);
