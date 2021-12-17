import { combineReducers } from "redux"
import authReducer from "../../containers/HomeTemplate/AuthPage/modules/reducer"
import addUserReducer from "./../../containers/HomeTemplate/Register/modules/reducer"
import projectManagementReducer from "../../containers/HomeTemplate/Management/modules/reducer"




const rootReducer = combineReducers({

    authReducer,
    addUserReducer,
    projectManagementReducer,

})

export default rootReducer