import product from "../models/product";
export const productController = {
    delete: async(req:any ,res:any) => {
        try{
            const allProducts = await product.find()    
            res.status(200).send(allProducts)

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
            const myProduct =new product({...req.body})
            await myProduct.save()
            res.status(200).send(myProduct)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    
};