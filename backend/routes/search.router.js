import { Router } from "express";
import SearchController from "../controller/search.controller.js";
const router = Router();

router.get("/search", async (req, res) => {
    const { type, serviceType } = req.query
    if (!type || !serviceType) {
        return res.status(400).json({
            error: "Missing required parameters: type and serviceType",
        });
    }

    try {
        const homes = await SearchController.filterSearch(serviceType, type);
        console.log("estas son las casas que se envian", homes);
        res.status(200).json(homes);
    } catch (error) {
        console.error("Error in /search:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/searchAll", async (req, res) => {
    const { serviceType, type, price, surface, location } = req.query
    const homes = await SearchController.filterSearch(serviceType, type, price, surface, location)
    console.log("casas", homes);
    res.status(200).json(homes);
})


export default router;