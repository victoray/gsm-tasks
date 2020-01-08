import React, {useState} from "react";
import gsmtasks from "../api/gsmtasks";

const data = {
    account: "https://gsmtasks.com/api/tasks/accounts/323de39c-eaee-47d2-8fb6-bab5b0bba3a2/",
    category: "assignment"
};

const TaskForm = () => {
    const [value, setValue] = useState("Telliskivi 60, Tallinn");

    const onSubmit = () => {
        gsmtasks.post("/", {
            address: {
                raw_address: value
            }, ...data
        }).then(response => console.log(response))
            .catch(error => console.log(error));
    };
    return (
        <div className="task">
            <div className="task__header">
                Create task
            </div>

            <input type="text" className="task__input" placeholder={"Address"}
                   value={value} onChange={(e) => setValue(e.target.value)}
            />
            <button className="task__button" onClick={onSubmit}>
                Create Task
            </button>
        </div>)
};

export default TaskForm;
