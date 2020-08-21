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
        let decoded = ''
        if(token) decoded = decode(token)
        if(decoded.exp > (Date.now() / 1000))
            return true
        else
            return false
    }
}