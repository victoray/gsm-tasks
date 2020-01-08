import gsmtasks from "./gsmtasks";
import {useDispatch} from "react-redux";

export const useGetTasks = () => {
    const dispatch = useDispatch();

    const getTasks = () => {
        gsmtasks.get("/")
            .then(response => {
                console.log(response.data);
                dispatch({type: "", payload: response.data});
            });
    };

    return getTasks
};
