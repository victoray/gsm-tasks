import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map";
import TaskForm from "./components/TaskForm";

const App: React.FC = () => {
    return (
        <div className={"container"}>
            <Map/>
            <TaskForm/>
        </div>
    );
};

export default App;
