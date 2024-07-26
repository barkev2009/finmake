import { $host } from "../api";
import tryCatchAPI from "../utils/tryCatchAPI";


export const createCreateRequestAPI = async ({ phone_number, name, timezone, time_start, time_end }) => tryCatchAPI(
    async () => {
        const { data } = await $host.post('api/callRequest', { phone_number, name, timezone, time_start, time_end });
        return data;
    }
) 