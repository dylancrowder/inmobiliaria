import Home from "../schema/home.schema.js";

export default class CreateHome {

    static async create(data) {

        const newHome = await Home.create(data)
        return newHome
    }


}