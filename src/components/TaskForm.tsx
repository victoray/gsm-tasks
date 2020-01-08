import React, {useState} from "react";
import gsmtasks from "../api/gsmtasks";

const data = {
    account: "https://gsmtasks.com/api/tasks/accounts/3c786557-0199-40f7-a0ed-d0969be85e9d/",
    category: "assignment"
};

const TaskForm = () => {
    const [value, setValue] = useState("");

    const onSubmit = () => {
        if (!value) return;
        
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
