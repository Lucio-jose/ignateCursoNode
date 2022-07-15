import  express  from "express";
import { categoriaRoute } from "./routes/categoria.routes";
import { spacificationRoute } from "./routes/specification.routes";

const app = express();

app.use(express.json())
 
app.get('/',(Request, Response)=>{
    return Response.status(200).json({message:"Ola Mundo2"})
})
  
app.use("/categoria", categoriaRoute)
app.use("/spacification", spacificationRoute)

app.listen(3033,()=>{
    console.log("Servidor rodando")
})