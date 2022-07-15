import { v4 as uuid } from "uuid";

class Specification{
    id: string;
    nome: string;
    descricao?: string;
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }
}
export {Specification}
