import { Specification } from "../model/specifications";



interface ICreateSpecificationDTO{
    nome: string;
    descricao: string
}

interface IspacificationRepository{
    findByName(nome: string): Specification;
    create({nome, descricao}: ICreateSpecificationDTO):void;

    list(): Specification[];
}

export {IspacificationRepository, ICreateSpecificationDTO}