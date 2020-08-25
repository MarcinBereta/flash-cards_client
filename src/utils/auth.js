import decode from 'jwt-decode';
import { Construction } from 'styled-icons/material';

export default class Auth{
    static setToken(token){
        localStorage.setItem("token", token)
    }

    static removeToken(){
        localStorage.removeItem("token")
    }

    static getToken(){
        return localStorage.getItem("token")
    }

    static isTokenActive(){
        let token = this.getToken()
        if(!this.tokenExist()) return false

        let decoded = decode
        if(decoded.exp > (Date.now() / 1000))
            return true
        else
            return false
    }
    static getUserId(){
        let token = this.getToken()
        if(!this.tokenExist()) return

        let decoded = decode(token)
        let userId = decoded._id
        return userId
    }

    static tokenExist(){
        if(this.getToken()) return true
        return false;
    }
}