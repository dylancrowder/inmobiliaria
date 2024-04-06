import express from "express";
import inicioRouter from "./routes/inicio.router.js";
import createHome from "./routes/createHome.router.js";
import search from "./routes/search.router.js"
import email from "./routes/email.router.js"
import cors from "cors";
import path from "path";
import bodyParser from 'body-parser';
const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(path.resolve('uploads')));

// Monta las rutas correctamente
app.use("/", inicioRouter);
app.use("/", createHome);
app.use("/api", search, email)

export default app;
