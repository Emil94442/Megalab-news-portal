import { VERIFIED_REGISTRATION } from "../types"

const initialState = {
    verifiedRegistration: false
}

export const verifReducer = (state = initialState , action) => {
    switch (action.type) {

        case VERIFIED_REGISTRATION:
            return {
                ...state,
                verifiedRegistration: true
            }
            
        default:
            return state
    }
}