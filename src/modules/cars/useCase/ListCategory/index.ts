
import { CategoriaRepository } from "../../Repositories/implementations/categoriaRepository";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoriaRepository = CategoriaRepository.getINSTANCE()
const listCategoryUseCase = new ListCategoryUseCase(categoriaRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export {listCategoryController}
