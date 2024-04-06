import CreateHome from "../db/services/createHouses.services.js";


export default class CreateHomeController {

    static async create(data) {

        await CreateHome.create(data)
    }


}