// import { $authHost, $host } from ".";
import { $authHost, $host } from "../api";
import { setCookie } from "../utils/cookies";
import { encryptDecrypt } from "../utils/xorer";

export const loginAPI = async (login, password) => {
    login = encryptDecrypt(login);
    password = encryptDecrypt(password);
    const { data } = await $host.post('api/auth', { login, password });
    setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, data.token);
    return data;
}

export const checkAPI = async () => {
    const { data } = await $authHost.get('api/auth');
    setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, data.token);
    return data;
}