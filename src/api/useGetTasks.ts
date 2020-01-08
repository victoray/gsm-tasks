import gsmtasks from "./gsmtasks";
import {useDispatch} from "react-redux";
import {GET_TASKS} from "../reducers";

export const useGetTasks = () => {
    const dispatch = useDispatch();

    const getTasks = () => {
        gsmtasks.get("/")
            .then(response => {
                dispatch({type: GET_TASKS, payload: response.data});
            })
            .catch(error => console.log(error));
    };

    return getTasks;
};
