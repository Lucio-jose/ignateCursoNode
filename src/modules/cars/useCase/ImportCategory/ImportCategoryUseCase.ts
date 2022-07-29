import { IcategoryRepository } from "../../Repositories/IcategoryRepository"



class ImportCategoryUsecase{
    constructor(private categoryRepository: IcategoryRepository){}
    execute(file: Express.Multer.File):void{
        console.log(file)
    }
}
export {ImportCategoryUsecase}

