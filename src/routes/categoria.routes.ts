import multer from "multer";
import { Router, Request, Response} from "express";
import { createCategoryController } from "../modules/cars/useCase/createCategory";
import { listCategoryController } from "../modules/cars/useCase/ListCategory";

const categoriaRoute = Router();

const upload = multer({
    dest: './temp'
})

categoriaRoute.post("/import", upload.single("file"), (req: Request, res: Response)=>{
    const{file}=req;
    console.log(file)
    return res.status(201).send()
 })

categoriaRoute.post("/",(req: Request, res: Response)=>{
   return createCategoryController.handle(req, res)
})

categoriaRoute.get("/",(request: Request, response: Response)=>{
    return listCategoryController.handle(request, response)
})

export {categoriaRoute};