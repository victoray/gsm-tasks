import {combineReducers} from "redux";

export const GET_TASKS = "GET_TASKS";
const taskReducers = (state = [], action: any) => {
    if (action.type === GET_TASKS) {
        return [...state, ...action.payload]
    }
    return state;
};

export default combineReducers({
    tasks: taskReducers
});
