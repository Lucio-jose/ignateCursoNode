import { Router, Request, Response} from "express";
import { createCategoryController } from "../modules/cars/useCase/createCategory";
import { listCategoryController } from "../modules/cars/useCase/ListCategory";

const categoriaRoute = Router();

categoriaRoute.post("/",(req: Request, res: Response)=>{
   return createCategoryController.handle(req, res)
})

categoriaRoute.get("/",(request: Request, response: Response)=>{
    return listCategoryController.handle(request, response)
})

export {categoriaRoute};