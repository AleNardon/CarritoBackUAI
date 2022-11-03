import product from "../models/product";
import provider from "../models/provider";

export const productController = {
    delete: async(req:any ,res:any) => {
        try{
            // await product.find()    
            const response = await product.deleteOne({_id:req.params.id});
            res.status(200).send(response)

        }catch(error){
            res.status(500).send(error)
        }
    },
    get: async(req:any ,res:any) => {
        try{
            const allProducts = await product.find()    
            res.status(200).send(allProducts)

        }catch(error){
            res.status(500).send(error)
        }
    },
    post: async (req:any,res:any) => {
        try {

            
            const  prov = await provider.findOne({_id:req.body.provider})
            
            if(prov){
                
                const myProduct =new product({...req.body})
                await myProduct.save()
                
                res.status(200).send(myProduct)
            }else{
                
                res.status(400).send("Error try to input inexistent provider.")
            }
            

        } catch (error) {
            res.status(500).send(error)
        }
    },
    
    put: async (req:any,res:any) => {
        try {

            if(req.body.provider){
                const  prov = await provider.findOne({_id:req.body.provider})
                console.log("aca");
                
                if(prov){
                    const response = await product.updateOne({_id:req.params.id},{...req.body});
                    res.status(200).send(response)
                }else{
                    res.status(400).send("Error try to input inexistent provider.")
                }
            }else{
                const response = await product.updateOne({_id:req.params.id},{...req.body});
                res.status(200).send(response)
            }
            

        } catch (error) {            
            res.status(500).send(error)
        }
    },
    
    
};