import { combineReducers } from "redux"
import authReducer from "../../containers/HomeTemplate/AuthPage/modules/reducer"
import addUserReducer from "./../../containers/HomeTemplate/Register/modules/reducer"

const rootReducer = combineReducers({

    authReducer,
    addUserReducer

})

export default rootReducer