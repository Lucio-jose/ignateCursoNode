import  express  from "express";
import { router } from "./routes";

const app = express();

app.use(express.json())

app.use(router)
 
app.get('/',(Request, Response)=>{
    return Response.status(200).json({message:"Ola Mundo2"})
})

app.listen(3033,()=>{
    console.log("Servidor rodando")
})