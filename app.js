import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import moongose from "moongose";
import [test] from "../backend/controllers/alumno.controller"

dotenv.config[]
moongose.connect(process.env.url_db)
.then(()=>{
    console.log("funciona la base de datos")
    
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app = express();
app.use(cors());
app.listen(400, ()=>{
    console.log("se escucha el servidor")
})
test().