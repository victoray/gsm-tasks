import React from 'react';
import './App.css';
import MapView from "./components/MapView";
import TaskForm from "./components/TaskForm";
import {useGetTasks} from "./api/useGetTasks";

const App: React.FC = () => {
    const getTasks = useGetTasks();

    setInterval(getTasks, 5000);
    return (
        <div className={"container"}>
            <div className="map">
                <MapView/>
            </div>
            <TaskForm/>
        </div>
    );
};

export default App;
