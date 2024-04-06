import http from "http";
import app from "./app.js"
import { initMongo } from "./db/db.connect.js";
const server = http.createServer(app);


await initMongo(server)

const PORT = 8080
server.listen(PORT, () => {
  console.log("conectado correctamente al servidor ${8080}");;
});
