import { NICKNAME, TOKEN } from "../types"

const initialState = {
    MyToken: '',
    nickname: '',
    name: '',
    last_name: ''
}

export const globalReducer = (state = initialState , action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                MyToken: action.data
            }
        case NICKNAME:
            return {
                ...state,
                nickname: action.data
            }
        default:
            return state
    }
}