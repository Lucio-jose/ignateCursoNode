import { Router } from "express";
import { categoriaRoute } from "../routes/categoria.routes";
import { spacificationRoute } from "../routes/specification.routes";

const router = Router();

router.use("/categoria", categoriaRoute)

router.use("/spacification", spacificationRoute)

export {router}