import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController{
    constructor(private createSpecificatioUseCase: CreateSpecificationUseCase){}

    handle(request: Request, response: Response): Response{
        const{  nome, descricao}= request.body

        this.createSpecificatioUseCase.execute({nome, descricao})

        return response.status(201).send()
    }
}
export {CreateSpecificationController}


