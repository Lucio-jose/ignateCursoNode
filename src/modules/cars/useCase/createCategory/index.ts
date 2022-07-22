import { CategoriaRepository } from "../../Repositories/categoriaRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriaRepository = new CategoriaRepository()

const createCategoryUseCase = new CreateCategoryUseCase(categoriaRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController, createCategoryUseCase}
