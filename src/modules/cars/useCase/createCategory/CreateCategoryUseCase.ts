import { IcategoryRepository } from "../../Repositories/IcategoryRepository";

interface IRequeste{
    nome: string;
    descricao: string
}

class CreateCategoryUseCase{
    constructor(private categoriaRepository: IcategoryRepository){}


    execute({nome, descricao}: IRequeste):void{
        const CategoriaExist= this.categoriaRepository.findByName(nome);


    if(CategoriaExist){
        throw new Error("Categoria já existente");
        
    }

    this.categoriaRepository.create({nome, descricao})
    }
}
export {CreateCategoryUseCase}

