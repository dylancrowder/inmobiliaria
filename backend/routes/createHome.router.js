import { Router } from "express";
import CreateHomeController from "../controller/home.controller.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({ storage: storage });

router.post("/createHome", upload.array("thumbnail", 12), async (req, res) => {
    try {

        const { name, price, description, rooms, bathrooms, location, type, surface, extras, serviceType } = req.body;

        const pathPush = []
        const filesExt = req.files
        filesExt.forEach(archivo => {

            pathPush.push(archivo.path)
        })

        const newHome = {
            name,
            serviceType,
            price,
            description,
            thumbnail: pathPush,
            rooms,
            bathrooms,
            location,
            type,
            surface,
            extras,
        };

        // Guardar en la base de datos
        const createHome = await CreateHomeController.create(newHome)

        res.status(201).json({ message: "Home created successfully", createHome });
    } catch (error) {
        console.error("Error creating home:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
