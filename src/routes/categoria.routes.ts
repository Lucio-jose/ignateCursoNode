import { Router, Request, Response } from "express";
import { CategoriaRepository } from "../modules/cars/Repositories/categoriaRepository";
//import { PostgresCategoryRepository } from "../modules/cars/Repositories/postgresCategoryRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCase/createCategory/CreateCategoryUseCase";

const categoriaRoute = Router();
const categoriaRepository = new CategoriaRepository();

categoriaRoute.post("/",(req: Request, res: Response)=>{
    const {nome, descricao}= req.body;

    const createCategoryUseCase = new CreateCategoryUseCase(categoriaRepository);

    createCategoryUseCase.execute({nome, descricao})

    return res.status(201).send()
})

categoriaRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = categoriaRepository.list();

    return res.status(200).json(allCategories)
})

export {categoriaRoute};