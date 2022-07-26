import { Request, Response } from "express"
import { ListCategoryUseCase } from "./listCategoryUseCase";

class ListCategoryController{
    constructor(private listCategoryUseCase: ListCategoryUseCase){}

    handle(request:Request, response:Response): Response{
        const all = this.listCategoryUseCase.execute();

        return response.status(200).json(all)
    }
}
export {ListCategoryController}

