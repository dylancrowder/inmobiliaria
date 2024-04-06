import Home from "../schema/home.schema.js";

export default class Search {

    static async filterSearch(serviceType, type, price, surface, location) {
        try {
            console.log(serviceType, type, price, surface, location);

            const matchStage = {};

            if (serviceType !== "null" && serviceType !== NaN && serviceType !== undefined) {
                matchStage.serviceType = serviceType;
            }
            if (type !== "null" && type !== NaN && type !== undefined) {
                matchStage.type = type;
            }
            if (price !== "null" && !isNaN(price) && price !== undefined) {
                matchStage.price = parseInt(price);
            }
            if (surface !== "null" && surface !== NaN && surface !== undefined) {
                matchStage.surface = surface;
            }
            if (location !== "null" && location !== NaN && location !== undefined) {
                matchStage.location = location;
            }

            console.log("este es el stage", matchStage);
            const homes = await Home.aggregate([
                {
                    $match: matchStage
                }
            ]);

            return homes;
        } catch (error) {
            throw error;
        }
    }


}