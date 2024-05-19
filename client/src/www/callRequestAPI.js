import { $host } from "../api";
import tryCatchAPI from "../utils/tryCatchAPI";


export const createCreateRequestAPI = async ({ phone_number, name }) => tryCatchAPI(
    async () => {
        const { data } = await $host.post('api/callRequest', { phone_number, name });
        return data;
    }
) 