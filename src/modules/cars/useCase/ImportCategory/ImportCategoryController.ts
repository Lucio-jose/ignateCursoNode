import { Request, Response } from "express";

import { ImportCategoryUsecase } from "./ImportCategoryUseCase";


class ImportCategoryController{
    constructor(private ImportCategoryUseCase:ImportCategoryUsecase){}

    handle(request:Request, response:Response): Response{
        const{file}=request;
        
        this.ImportCategoryUseCase.execute(file)

        return response.send();
    }
}
export {ImportCategoryController}

