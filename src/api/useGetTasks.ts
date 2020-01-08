import gsmtasks from "./gsmtasks";
import {useDispatch} from "react-redux";
import {GET_TASKS} from "../reducers";

export const useGetTasks = () => {
    const dispatch = useDispatch();

    const getTasks = () => {
        gsmtasks.get("/")
            .then(response => {
                console.log(response.data);
                dispatch({type: GET_TASKS, payload: response.data});
            });
    };

    return getTasks
};
