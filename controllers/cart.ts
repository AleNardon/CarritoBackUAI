// import { response } from "express";
import { response } from "express";
import { exit } from "process";
import cart from "../models/cart";
import product from "../models/product";
export const cartController = {
    delete: async(req:any ,res:any) => {
        try{
            // await product.find()    
            const response = await cart.deleteOne({_id:req.params.id});
            res.status(200).send(response)

        }catch(error){
            res.status(500).send(error)
        }
    },


    get: async(req:any ,res:any) => {
        try{
            const Mycart = await cart.find()    
            res.status(200).send(Mycart)

        }catch(error){
            res.status(500).send(error)
        }
    },
    
    
    post: async (req:any,res:any) => {
        try {
            const myCart =new cart({...req.body})
            await myCart.save()
            res.status(200).send(myCart)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    put: async (req:any,res:any) => {
        try {

            const  selectCart = await cart.findOne({_id:req.params.id});
            const  pro = await product.findOne({_id:req.body.productId});
            const qu = parseInt(req.body.quantity);

            // si el producto existe
            if(pro && selectCart && qu!=0 ){
               
                
                // si el stock del producto es igual o mayor a la cantidad solicitada
                if(pro.stock>=qu ){
                   
                    //buscamos si existe el id del producto en la lista de details  
                    let  index = selectCart.productsDetail?.findIndex( e => e.product==pro.id)
                   

                    // si existe en el product details 
                    if(index!=-1){

                        // si la cantidad que estamos restando es mayor a lo que tenemos ERROR
                        let quaInDetail = selectCart.productsDetail[index].productQuantity
                        
                        if(qu<0 && (quaInDetail+qu)<0){
                            res.status(400).send("Error try to input less quantity than productDetails")
                            return
                            
                        }
                        // si la cantidad al restarlo es igual a 0 lo saca del product detail
                        else if((quaInDetail+qu)==0){
                            selectCart.productsDetail.splice(index,1)
                        } 
                        // si la cantidad del detail es mayor a la cantidad que yo le ingreso OK
                        else{
                            
                            selectCart.productsDetail[index].productQuantity+=qu
                        }
                        
                    }else{
                        

                        // si es negativo ERROR xq queremos meter algo que no existe en negativo
                        if(qu<0){
                            res.status(400).send("Error try to input less quantity than 0 when product in productDetails does not exist")
                            return
                        }else{
                            
                            selectCart.productsDetail.push({product:pro.id,productQuantity:qu,price:pro.price})
                            
                        }
                    }
                    

                    // modificamos el stock 
                    pro.stock -= qu;
                   
                    // le sumamos al total
                    selectCart.total+= pro.price*qu
                    
                    // actualizamos los componentes
                    await pro.save();
                
                    const response = await selectCart.save();
                  
                    res.status(200).send(response);
                }else{
                    res.status(400).send("Error try to input more quantity than exist in stock")
                } 
            } else{
                const response = "Error in selection of cart, product or quantity=0"
                res.status(400).send(response)

            }
            
            
        } catch (error) {            
            res.status(500).send(error)
        }
    },
    
};