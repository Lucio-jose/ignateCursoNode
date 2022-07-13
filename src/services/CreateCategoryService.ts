import { CategoriaRepository } from "../Repositories/categoriaRepository";


interface IRequeste{
    nome: string;
    descricao: string
}


class CreateCategoryService{
    constructor(private categoriaRepository: CategoriaRepository){}


    execute({nome, descricao}: IRequeste):void{
        const CategoriaExist= this.categoriaRepository.findByName(nome);


    if(CategoriaExist){
        throw new Error("Categoria já existente");
        
    }

    this.categoriaRepository.create({nome, descricao})
    }
}
export {CreateCategoryService}

