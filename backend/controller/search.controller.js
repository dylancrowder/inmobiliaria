import Home from "../db/schema/home.schema.js";
import Search from "../db/services/search.services.js";

export default class SearchController {



    static async getHome(serviceType, type) {

        const homes = await Search.filterSearch(serviceType, type);

        return homes
    }



    static async findByServiceType(serviceType) {


        const homes = await Search.filterSearch(serviceType)

        return homes
    }

    static async filterSearch(serviceType, type, price, surface, location) {

        const home = await Search.filterSearch(serviceType, type, price, surface, location)
        return home
    }



    static async getCartPaginate(req) {
        return {
            name: req.user.first_name,
            role: req.user.role,
            user_id: req.user._id
        };
    }

    static async get(page,) {

        const options = { limit: 4, page };


        const {
            docs,
            totalPages,
            prevPage,
            nextPage,
            page: currentPage,
            hasPrevPage,
            hasNextPage
        } = await Home.paginate(options);

        const BASE_URL = "http://localhost:8080/api/profile";
        const prevLink = hasPrevPage
            ? `${BASE_URL}?sort=${sort}&page=${prevPage}&limit=${limit}`
            : null;
        const nextLink = hasNextPage
            ? `${BASE_URL}?sort=${sort}&page=${nextPage}&limit=${limit}`
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


}