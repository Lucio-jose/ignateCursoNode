import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUsecase()
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController};