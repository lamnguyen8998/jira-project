import * as ActionType from "./constants";
const initialState = {
    loading: false,
    data: null,
    error: null
};

const projectManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PROJECT_MANAGER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        case ActionType.PROJECT_MANAGER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        case ActionType.PROJECT_MANAGER_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        case ActionType.PROJECT_MANAGER_DELETE:
            return { ...state }

        case ActionType.PROJECT_MANAGER_DELETEUSER:
            console.log(action.payload)
            return { ...state }

        default:
            return { ...state };
    }

}


export default projectManagementReducer