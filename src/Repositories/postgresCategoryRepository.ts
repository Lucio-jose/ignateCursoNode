import { Category } from "../model/categoria";
import { IcategoryRepository, ICreateCategoryDTO } from "./IcategoryRepository";


class PostgresCategoryRepository implements IcategoryRepository{
    findByName(nome: string): Category {
        console.log(nome)
        return null;
        //throw new Error("Method not implemented.");
    }
    list(): Category[] {
        return null;
        //throw new Error("Method not implemented.");
    }
    create({nome, descricao}:ICreateCategoryDTO): void {
        console.log(nome, descricao)
        //throw new Error("Method not implemented.");
    }


}
export {PostgresCategoryRepository}

