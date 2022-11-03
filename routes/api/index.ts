import { Router } from "express";
import productRoutes from "./products/";
import  cartRoutes from "./cart/";
import  cartProvider from "./provider/";

const router = Router();
// todas las rutas que lleguen a /api/blogs, ejecutaran lo que se exporto de blogRoutes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/provider", cartProvider);

// se pueden agregar todas las rutas que se necesiten, estaran dentro de /api

export default router;
