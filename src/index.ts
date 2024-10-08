import { config } from "dotenv";
import express from "express";

//Para poder acceder a las variables del ambiente (.env)
config();

console.log("Prueba");

const app = express();

app.listen(process.env.SERVER_PORT, function () {
    console.log("Escuchando puerto " + process.env.SERVER_PORT);
});