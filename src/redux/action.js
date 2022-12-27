import { CHANGE_INPUT_REG, CHANGE_INPUT_REG_LAST_NAME, CHANGE_INPUT_REG_NAME, CHANGE_INPUT_REG_NICKNAME, CHANGE_INPUT_REG_PASSWORD, CHANGE_INPUT_REG_PASSWORD2, VERIFIED_REGISTRATION } from "./types";

export function changeInputRegLastName (data) {
    return {
        type: CHANGE_INPUT_REG_LAST_NAME,
        data
    }
}

export function changeInputRegName (data) {
    return {
        type: CHANGE_INPUT_REG_NAME,
        data
    }
}
export function changeInputRegNickName (data) {
    return {
        type: CHANGE_INPUT_REG_NICKNAME,
        data
    }
}
export function changeInputRegPassword (data) {
    return {
        type: CHANGE_INPUT_REG_PASSWORD,
        data
    }
}
export function changeInputRegPassword2 (data) {
    return {
        type: CHANGE_INPUT_REG_PASSWORD2,
        data
    }
}

export function verifiedReg () {
    return {
        type: VERIFIED_REGISTRATION,
    }
}
