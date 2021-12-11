import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actAuthApi = (user) => {
    return (dispatch) => {
        dispatch(actAuthRequest());

        api.post("Users/signin", user)
            .then((result) => {
                dispatch(actAuthSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actAuthFailed(error));
            });
    };
};

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    };
};

const actAuthFailed = (error) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: error,
    };
};
