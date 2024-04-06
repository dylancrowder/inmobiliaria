import { Router } from "express";
import HomePage from "../db/services/homePage.services.js";

const router = Router()

router.get("/inicio", async (req, res) => {
    const { limit = 3, page } = req.query;
    const home = await HomePage.getHomePaginate(page, limit)
    console.log(home);
    res.status(200).json(home)
})

router.get("/getByID", async (req, res) => {
    const { id } = req.query
    const homes = await HomePage.findById(id)
    console.log("esta es la data del id");
    res.status(200).json(homes)
})

export default router