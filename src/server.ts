import  express  from "express";

const app = express();

app.get('/',(Request, Response)=>{
    return Response.status(200).json({message:"Ola Mundo2"})
})

app.listen(3033,()=>{
    console.log("Servidor rodando")
})