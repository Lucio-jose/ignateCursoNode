import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    handle(request:Request, response:Response): Response{

        const {nome, descricao}= request.body;

    
        this.createCategoryUseCase.execute({nome, descricao})
    
        return response.status(201).send()
    }

}
export {CreateCategoryController}
