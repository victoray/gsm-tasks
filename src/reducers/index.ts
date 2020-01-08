import {combineReducers} from "redux";

const taskReducers = (state = [], action: any) => {
    return state;
};

export default combineReducers({
    tasks: taskReducers
});
