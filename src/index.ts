import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import professorRouter from "./routes/professor";
import courseRouter from "./routes/course";
import testRoutes from "./routes/test";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import validationError from "./middlewares/validation-error";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";

//Para poder acceder a las variables del ambiente
// Cargar dotenv-flow solo si no estamos en producción
if (process.env.NODE_ENV !== "production") {
  dotenvFlow.config();
}

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // Adjust this to your frontend's origin
    methods: ["GET", "POST"],
  },
});

// Middleware para CORS - Permite todas las solicitudes
app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Rutas de la api
app.use("/api/v1/student", studentRouter);

app.use("/api/v2/professor", professorRouter);

app.use("/api/v3/course", courseRouter)

// Rutas de prueba
app.use("/error", testRoutes);

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Make io accessible to routers/controllers
app.set("io", io);

// Middlewares
app.use(validationError); // Error de validacion
app.use(unknownResource); // Error 404, recurso no encontrado

// Middlewares de error
app.use(unknownError);

server.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});