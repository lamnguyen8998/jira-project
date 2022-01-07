import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actFetchProject = () => {
    return (dispatch) => {
        dispatch(actProjectmanagementRequest());
        api.get("/Project/getAllProject")
            .then((result) => {
                dispatch(actProjectmanagementSuccess(result.data.content))
                console.log(result.data.content)

            })
            .catch((error) => {
                dispatch(actProjectmanagementFailed(error))
            })
    }
}

export const actDeleteProject = (id) => {
    return (dispatch) => {
        dispatch(actProjectmanagementDelete());
        api.delete(`Project/deleteProject?projectId=${id}`)
            .then((result) => {
                console.log("delete")
                dispatch(actFetchProject())
            })
            .catch((error) => {
                console.log("error", error.message)
            })
    }
}

export const actDeleteUser = (data) => {
    return (dispatch) => {
        dispatch(actProjectmanagementDeleteUser());
        api.post(`Project/removeUserFromProject`, data)
            .then(result => {
                console.log("delete user from project")
                dispatch(actFetchProject())
            })
            .catch(error => console.log("error", error.message))
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

export const actProjectmanagementDelete = (id) => {
    return {
        type: ActionType.PROJECT_MANAGER_DELETE,
        payload: id
    }
};

export const actProjectmanagementDeleteUser = (data) => {
    return {
        type: ActionType.PROJECT_MANAGER_DELETEUSER,
        payload: data
    }
}