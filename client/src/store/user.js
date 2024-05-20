import { makeAutoObservable } from 'mobx';
import { setCookie } from '../utils/cookies';
import { checkAPI, loginAPI } from '../www/authAPI';

class User {
    isAuth = false;
    constructor() {
        makeAutoObservable(this)
    }

    checkAuth() {
        checkAPI().then(
            (resp) => {
                console.log(resp);
                setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, resp.token);
                this.setIsAuth(true);
            }
        ).catch(
            (resp) => {
                console.log(resp)
            }
        );
    }
    
    login(login, password) {
        loginAPI(login, password).then(
            (resp) => {
                console.log(resp);
                setCookie(process.env.REACT_APP_LOCAL_STORAGE_KEY, resp.token);
                this.setIsAuth(true);
            }
        )
    }

    setIsAuth(value) {
        this.isAuth = value;
    }

    get watchIsAuth() {
        return this.isAuth
    }
}

export default new User();