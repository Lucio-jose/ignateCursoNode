import { CategoriaRepository } from "../../Repositories/implementations/categoriaRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriaRepository = CategoriaRepository.getINSTANCE()

const createCategoryUseCase = new CreateCategoryUseCase(categoriaRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController, createCategoryUseCase}
