import { Category } from "../../model/categoria";
import { IcategoryRepository } from "../../Repositories/IcategoryRepository"

class ListCategoryUseCase{
 constructor(private categoriaRepository: IcategoryRepository){}


    execute():Category[]  {
       const categories = this.categoriaRepository.list();

       return categories;
    }
}

export {ListCategoryUseCase}
