import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actAuthApi = (user, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest());

        api.post("Users/signin", user)
            .then((result) => {
                // Lưu trang thái login
                localStorage.setItem("User", JSON.stringify(result.data.content))

                //redirect management 
                history.replace("/projectmanagement")
                dispatch(actAuthSuccess(result.data.content));
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
