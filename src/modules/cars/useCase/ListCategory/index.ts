import { CategoriaRepository } from "../../Repositories/categoriaRepository";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoriaRepository = new CategoriaRepository()
const listCategoryUseCase = new ListCategoryUseCase(categoriaRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export {listCategoryController}
