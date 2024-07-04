import express from "express";
import connectToDBAndServer from "./connect.js";
import todoRouter from "./routes/todoRoutes.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/todos", todoRouter);

connectToDBAndServer();
