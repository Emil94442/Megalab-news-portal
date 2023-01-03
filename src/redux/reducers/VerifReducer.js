import { ERROR_LAST_NAME, ERROR_LAST_NAME_OFF, ERROR_NAME, ERROR_NAME_OFF, ERROR_NICKNAME, ERROR_NICKNAME_OFF, ERROR_NICKNAME_TEXT, LESS_THAN_8, NICKNAME_REGISTRATED, PASSWORD_OFF, SIMILAR_PASSWORD, VERIFIED_REGISTRATION } from "../types"

const initialState = {
    verifiedRegistration: false,
    errorLastNameOfReg: false,
    errorNameOfReg: false,
    errorNicknameOfReg: false,
    errorNicknameTextOfReg: '',
    similarPasswordErr: false,
    errorPasswordOfReg: '',
    lessThan: false,
    NicknameRegistrated: false
}

export const verifReducer = (state = initialState , action) => {
    switch (action.type) {

        case VERIFIED_REGISTRATION:
            return {
                ...state,
                verifiedRegistration: true
            }

        case ERROR_LAST_NAME:
            return {
                ...state,
                errorLastNameOfReg: true
            }

        case ERROR_LAST_NAME_OFF:
            return {
                ...state,
                errorLastNameOfReg: false
            }

        case ERROR_NAME:
            return {
                ...state,
                errorNameOfReg: true
            }

        case ERROR_NAME_OFF:
            return {
                ...state,
                errorNameOfReg: false
            }

        case ERROR_NICKNAME:
            return {
                ...state,
                errorNicknameOfReg: true,
                errorNicknameTextOfReg: 'Введите никнейм пожалуйста',
            }

        case ERROR_NICKNAME_TEXT:
            return {
                ...state,
                errorNicknameOfReg: true,
                errorNicknameTextOfReg: 'Никнейм уж создан другим пользователем'
            }

        case ERROR_NICKNAME_OFF:
            return {
                ...state,
                errorNicknameOfReg: false
            }

        case SIMILAR_PASSWORD:
            return {
                ...state,
                similarPasswordErr: true,
                errorPasswordOfReg: 'Пароли должны совпадать, быть не меньше 8 символов имея буквы и цифры'
            }

        case LESS_THAN_8:
            return {
                ...state,
                lessThan: true
            }

        case PASSWORD_OFF:
            return {
                ...state,
                similarPasswordErr: false
            }

        case NICKNAME_REGISTRATED:
            return {
                ...state,
                NicknameRegistrated: true
            }

        default:
            return state
    }
}