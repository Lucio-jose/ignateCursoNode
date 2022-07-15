import { Router, Request, Response } from "express";
import { SpecificationRepository } from "../modules/cars/Repositories/specificationRepository";
//import { PostgresCategoryRepository } from "../modules/cars/Repositories/postgresCategoryRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const spacificationRoute = Router();
const spacificationRepository = new SpecificationRepository();

spacificationRoute.post("/",(req: Request, res: Response)=>{
    const {nome, descricao}= req.body;

    const createCategoryService = new CreateSpecificationService(spacificationRepository);

    createCategoryService.execute({nome, descricao})

    return res.status(201).send()
})

spacificationRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = spacificationRepository.list();

    return res.status(200).json(allCategories)
})

export {spacificationRoute};