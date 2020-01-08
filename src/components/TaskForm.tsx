import React from "react";


const TaskForm = () => {
    return (
        <div className="task">
            <div className="task__header">
                Create task
            </div>

            <input type="text" className="task__input" placeholder={"Address"}/>
            <button className="task__button">
                Create Task
            </button>
        </div>)
};

export default TaskForm;
