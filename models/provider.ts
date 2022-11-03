import { Schema, model } from "mongoose";

interface IProvider {
  name:string, 
  adress?:string
}
// declaro la estructura que va a tener mi esquema/documento/tabla.
const providerSchema = new Schema({
  name:{type:String,require:true}, 
  adress:String
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model<IProvider>("Provider", providerSchema);
