import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

import { CategoriaRepository } from "../../Repositories/implementations/categoriaRepository";

const categoriaRepository = CategoriaRepository.getINSTANCE()
const importCategoryUseCase = new ImportCategoryUsecase(categoriaRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController};