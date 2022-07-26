import { SpecificationRepository } from "../../Repositories/implementations/specificationRepository";
import { CreateSpecificationController } from "./CreateSpacifiationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const spacificationRepository = SpecificationRepository.getINSTANCE();

const createSpecificationUseCase = new CreateSpecificationUseCase(spacificationRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export{createSpecificationController}


