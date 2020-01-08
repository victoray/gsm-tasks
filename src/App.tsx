import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapView from "./components/MapView";
import TaskForm from "./components/TaskForm";

const App: React.FC = () => {
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
