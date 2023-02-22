import { NICKNAME, SEARCH_CONSOLE_OFF, SEARCH_CONSOLE_ON, TOKEN } from "../types"

const initialState = {
    search_Console_Open: false
}

export const globalReducer = (state = initialState , action) => {
    switch (action.type) {
        case SEARCH_CONSOLE_OFF:
            return {
                ...state,
                search_Console_Open: false
            }
        case SEARCH_CONSOLE_ON:
            return {
                ...state,
                search_Console_Open: true
            }
        default:
            return state
    }
}