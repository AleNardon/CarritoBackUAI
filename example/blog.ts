import blogs from "../models/blogs";
export const blogController = {
    delete: () => {},
    get: async(req:any ,res:any) => {
        try{
            const allBlogs = await blogs.find()    
            res.status(200).send(allBlogs)

        }catch(error){
            res.status(500).send(error)
        }
    },
    post: async (req:any,res:any) => {
        try {
            const myBlog =new blogs({...req.body})
            await myBlog.save()
            res.status(200).send(myBlog)
        } catch (error) {
            res.status(500).send(error)
        }
    },
};