import { Router, Request, Response } from "express";
import { CategoriaRepository } from "../modules/cars/Repositories/categoriaRepository";
import { PostgresCategoryRepository } from "../modules/cars/Repositories/postgresCategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriaRoute = Router();
const categoriaRepository = new CategoriaRepository();

categoriaRoute.post("/",(req: Request, res: Response)=>{
    const {nome, descricao}= req.body;

    const createCategoryService = new CreateCategoryService(categoriaRepository);

    createCategoryService.execute({nome, descricao})

    return res.status(201).send()
})

categoriaRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = categoriaRepository.list();

    return res.status(200).json(allCategories)
})

export {categoriaRoute};