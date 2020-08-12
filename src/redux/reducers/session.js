import {SET_USER_DATA, SET_USER_LOGGED} from '../types/session'

const initialState = {
    logged: false,
    user: {}
}

export default (state = initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state, user: action.user
            }
        case SET_USER_LOGGED:
            return{
                ...state, logged: true
            }
        default:
            return state
    }
}