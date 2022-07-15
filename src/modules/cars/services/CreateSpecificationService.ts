
interface IData{
nome: string;
descricao: string;
}

class CreateSpecificationService{
    execute({nome, descricao}: IData){
        console.log(nome, descricao)
    }
}
export {CreateSpecificationService}
