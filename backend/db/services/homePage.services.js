import Home from "../schema/home.schema.js";

export default class HomePage {
    static async getHome() {
        try {
            const home = await Home.find();
            return home;
        } catch (error) {
            console.error("Error in getHome:", error);
            throw error;
        }
    }


    static async getHomePaginate(page, limit) {

        const criteria = {};
        const options = { page, limit };

        const {
            docs,
            totalPages,
            prevPage,
            nextPage,
            page: currentPage,
            hasPrevPage,
            hasNextPage
        } = await Home.paginate(criteria, options)

        const BASE_URL = "http://localhost:8080/inicio";
        const prevLink = hasPrevPage
            ? `${BASE_URL}?page=${prevPage}&limit=${limit}`
            : null;
        const nextLink = hasNextPage
            ? `${BASE_URL}?page=${nextPage}&limit=${limit}`
            : null;

        return {
            status: "success",
            payload: docs.map((doc) => doc.toJSON()),
            totalPages,
            prevPage,
            nextPage,
            page: currentPage,
            hasPrevPage,
            hasNextPage,
            prevLink,
            nextLink
        };
    }




    static async findById(id) {

        const homes = await Home.findById(id)


        return homes
    }
}
