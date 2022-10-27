import cart from "../models/cart";
export const cartController = {
    delete: () => {},
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
    
};