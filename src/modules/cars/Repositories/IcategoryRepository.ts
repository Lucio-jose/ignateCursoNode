import { Category } from "../model/categoria";


interface ICreateCategoryDTO{
    nome: string;
    descricao: string;
}

interface IcategoryRepository{
    findByName(nome: string): Category;
    list(): Category[];
    create({nome, descricao}:ICreateCategoryDTO): void
}
export {IcategoryRepository, ICreateCategoryDTO};
