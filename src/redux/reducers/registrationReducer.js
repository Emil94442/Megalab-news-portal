import { CHANGE_INPUT_REG, CHANGE_INPUT_REG_LAST_NAME, CHANGE_INPUT_REG_NAME, CHANGE_INPUT_REG_NICKNAME, CHANGE_INPUT_REG_PASSWORD, CHANGE_INPUT_REG_PASSWORD2 } from "../types"

const initialState = {
    last_name: '',
    name: 'dwdw',
    nickname: '',
    password: '',
    password2: ''
}

export const registrationReducer = (state = initialState , action) => {
    switch (action.type) {
        case CHANGE_INPUT_REG_LAST_NAME:
            return {
               ...state,
               last_name: action.data
            }

        case CHANGE_INPUT_REG_NAME:
            return {
                ...state,
                name: action.data
            }

        case CHANGE_INPUT_REG_NICKNAME:
            return(() => {
                return {
                    ...state,
                    nickname: action.data
                 }
            })()

        case CHANGE_INPUT_REG_PASSWORD:
            return(() => {
                return {
                    ...state,
                    password: action.data
                 }
            })()
        
        case CHANGE_INPUT_REG_PASSWORD2:
            return(() => {
                return {
                    ...state,
                    password2: action.data
                 }
            })()
        default:
            return state
    }
}