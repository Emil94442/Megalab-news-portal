import { combineReducers } from 'redux'
import { registrationReducer } from './reducers/registrationReducer'
import { verifReducer } from './reducers/VerifReducer'

export const rootReducer = combineReducers({
    registrationReducer,
    verifReducer
})