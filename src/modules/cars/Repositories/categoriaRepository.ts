import { Category } from "../model/categoria"
import { IcategoryRepository, ICreateCategoryDTO } from "./IcategoryRepository";


class CategoriaRepository implements IcategoryRepository{


    private categoria: Category[];

    constructor(){
        this.categoria = [];
    }

    create({nome, descricao}:ICreateCategoryDTO):void{
        const category= new Category()
  
   Object.assign(category, {
       nome,
       descricao,
       created_ate: new Date()
   })

    this.categoria.push(category)
    }

    list(): Category[]{
        return this.categoria
    }

    findByName(nome: string){
        const category = this.categoria.find(category=>category.nome===nome)
        return category;
    }
}
export {CategoriaRepository}
