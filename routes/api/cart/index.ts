import { Router } from "express";
import { cartController } from "../../../controllers/cart";
// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/blogs/ con un metodo GET.

router.post("/",cartController.post);
router.get("/" ,cartController.get);
router.put("/:id" ,cartController.put);
router.delete("/:id" ,cartController.delete);

export default router;
