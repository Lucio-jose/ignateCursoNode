import { Router, Request, Response } from "express";
import { SpecificationRepository } from "../modules/cars/Repositories/implementations/specificationRepository";
import { createSpecificationController } from "../modules/cars/useCase/createSpecification";

const spacificationRoute = Router();
const spacificationRepository = SpecificationRepository.getINSTANCE();

spacificationRoute.post("/",(request: Request, response: Response)=>{
    return createSpecificationController.handle(request, response)
})

spacificationRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = spacificationRepository.list();

    return res.status(200).json(allCategories)
})

export {spacificationRoute};