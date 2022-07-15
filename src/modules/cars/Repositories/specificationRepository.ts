import { Specification } from "../model/specifications";
import { IspacificationRepository, ICreateSpecificationDTO } from "./IspecificationRepositroy";


class SpecificationRepository implements IspacificationRepository{
    private specification : Specification[];

    constructor(){
        this.specification= [];
    }

    create({ nome, descricao }: ICreateSpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            nome,
            descricao,
            created_ate: new Date()
        })

        this.specification.push(specification)

    }
    list(): Specification[] {
        return this.specification
    }

    findByName(nome: string){
        const Specification = this.specification.find(Specification=>Specification.nome===nome)
        return Specification;
    }

}
export {SpecificationRepository}


