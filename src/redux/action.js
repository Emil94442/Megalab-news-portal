import { CHANGE_INPUT_REG, CHANGE_INPUT_REG_LAST_NAME, CHANGE_INPUT_REG_NAME, CHANGE_INPUT_REG_NICKNAME, CHANGE_INPUT_REG_PASSWORD, CHANGE_INPUT_REG_PASSWORD2, ERROR_LAST_NAME, ERROR_LAST_NAME_OFF, ERROR_NAME, ERROR_NAME_OFF, ERROR_NICKNAME, ERROR_NICKNAME_OFF, ERROR_NICKNAME_TEXT, LESS_THAN_8, NICKNAME_REGISTRATED, PASSWORD_OFF, SIMILAR_PASSWORD, VERIFIED_REGISTRATION } from "./types";

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

export function ErrorLastName () {
    return {
        type: ERROR_LAST_NAME,
    }
}

export function ErrorLastNameOff () {
    return {
        type: ERROR_LAST_NAME_OFF,
    }
}

export function ErrorName () {
    return {
        type: ERROR_NAME,
    }
}

export function ErrorNameOff () {
    return {
        type: ERROR_NAME_OFF,
    }
}

export function ErrorNickname () {
    return {
        type: ERROR_NICKNAME,
    }
}

export function ErrorNicknameText () {
    return {
        type: ERROR_NICKNAME_TEXT,
    }
}

export function ErrorNicknameOff () {
    return {
        type: ERROR_NICKNAME_OFF,
    }
}

export function similarPassword () {
    return {
        type: SIMILAR_PASSWORD,
    }
}

export function LessThan8 () {
    return {
        type: LESS_THAN_8,
    }
}

export function PasswordErrOf () {
    return {
        type: PASSWORD_OFF,
    }
}

export function nicknameRegistrated () {
    return {
        type: NICKNAME_REGISTRATED,
    }
}