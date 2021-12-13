import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchProject = () => {
    return (dispatch) => {
        dispatch(actProjectmanagementRequest());
        api.get("/Project/getAllProject")
            .then((result) => {
                dispatch(actProjectmanagementSuccess(result.data.content))

            })
            .catch((error) => {
                dispatch(actProjectmanagementFailed(error))
            })
    }
}


export const actProjectmanagementRequest = () => {
    return {
        type: ActionType.PROJECT_MANAGER_REQUEST
    }
};
export const actProjectmanagementSuccess = (data) => {
    return {
        type: ActionType.PROJECT_MANAGER_SUCCESS,
        payload: data
    }
};
export const actProjectmanagementFailed = (error) => {
    return {
        type: ActionType.PROJECT_MANAGER_FAILED,
        payload: error
    }
};

