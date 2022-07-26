import { IspacificationRepository } from "../../Repositories/IspecificationRepositroy";

interface IData{
nome: string;
descricao: string;
}

class CreateSpecificationUseCase{
    constructor(private spacificationRepository: IspacificationRepository){}

    execute({nome, descricao}: IData):void{
        const ExistService = this.spacificationRepository.findByName(nome)

        if(ExistService){
            throw new Error("Specification já existente");
        }


        this.spacificationRepository.create({nome, descricao})
    }
}
export {CreateSpecificationUseCase}
