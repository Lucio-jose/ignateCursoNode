import { Router, Request, Response } from "express";
import { CategoriaRepository } from "../modules/cars/Repositories/categoriaRepository";
import { createCategoryController } from "../modules/cars/useCase/createCategory";

const categoriaRoute = Router();
const categoriaRepository = new CategoriaRepository();

categoriaRoute.post("/",(req: Request, res: Response)=>{
   return createCategoryController.handle(req, res)
})

categoriaRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = categoriaRepository.list();

    return res.status(200).json(allCategories)
})

export {categoriaRoute};