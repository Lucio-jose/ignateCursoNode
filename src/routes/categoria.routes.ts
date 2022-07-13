import { Router, Request, Response } from "express";
import { CategoriaRepository } from "../Repositories/categoriaRepository";

const categoriaRoute = Router();
const categoriaRepository = new CategoriaRepository();

categoriaRoute.post("/",(req: Request, res: Response)=>{
    const {nome, descricao}= req.body;

    const CategoriaExist= categoriaRepository.findByName(nome);
    if(CategoriaExist){
        return res.status(400).json({message:"Categoria já existe"})
    }

    categoriaRepository.create({nome, descricao})
   
    return res.status(201).send()
})

categoriaRoute.get("/",(req: Request, res: Response)=>{
    const allCategories = categoriaRepository.list();

    return res.status(200).json(allCategories)
})

export {categoriaRoute};