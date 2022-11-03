import provider from "../models/provider";
export const providerController = {
    delete: async(req:any ,res:any) => {
        try{
            // await product.find()    
            const response = await provider.deleteOne({_id:req.params.id});
            res.status(200).send(response)

        }catch(error){
            res.status(500).send(error)
        }
    },
    get: async(req:any ,res:any) => {
        try{
            const allProviders = await provider.find()    
            res.status(200).send(allProviders)

        }catch(error){
            res.status(500).send(error)
        }
    },
    post: async (req:any,res:any) => {
        try {
            const mProvider =new provider({...req.body})
            await mProvider.save()
            res.status(200).send(mProvider)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    
    put: async (req:any,res:any) => {
        try {
          
            const response = await provider.updateOne({_id:req.params.id},{...req.body});
            res.status(200).send(response)
        } catch (error) {            
            res.status(500).send(error)
        }
    },
    
    
};