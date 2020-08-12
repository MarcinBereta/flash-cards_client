import { SET_USER_LOGGED, SET_USER_DATA } from "../types/session"

export const setUserLogged = () =>{
    return{
        type: SET_USER_LOGGED
    }
}

export const setUserData = (user) =>{
    return{
        type: SET_USER_DATA,
        user
    }
}