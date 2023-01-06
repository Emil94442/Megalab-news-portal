import { combineReducers } from 'redux'
import { registrationReducer } from './reducers/registrationReducer'
import { verifReducer } from './reducers/VerifReducer'
import { globalReducer } from './reducers/GlobalReducer'

export const rootReducer = combineReducers({
    registrationReducer,
    verifReducer,
    globalReducer
})