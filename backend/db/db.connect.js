import mongoose from "mongoose";


const URI = "mongodb+srv://devdylancrowder:dilan_07@cluster0.pbvemm9.mongodb.net/inmobiliaria"
export const initMongo = async () => {
    try {
        mongoose.connect(URI);
        console.log("base de datos conectada correctamente");
    } catch (erro) {
        console.log("error al intentar conectarse a la db");
    }
};
