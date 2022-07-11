import { Router, Request, Response } from "express";
import { Category} from "../model/categoria";

const categoriaRoute = Router()

const categoria: Category[]= [];

categoriaRoute.post("/",(req: Request, res: Response)=>{
    const {nome, descricao}= req.body;

   const category= new Category()
  
   Object.assign(category, {
       nome,
       descricao,
       created_ate: new Date()
   })
   

    categoria.push(category)
    return res.status(201).json({message:`Categoria cadastrado`, categoria})
})

export {categoriaRoute}