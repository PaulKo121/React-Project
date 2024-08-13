import React from "react";
import { useSensors } from "./SensorContext";

const Sensor = ({ name }) => {
    const { sensors, toggleSensor } = useSensors();
    const sensor = sensors[name];

    return (
        <div>
            <h2>{name.chartAt(0).toUpperCase() + name.slice(1)} Sensor</h2>
            <p>Value: {sensor.value}</p>
            <p>Status: {sensor.enabled ? 'Enabled' : 'Disabled'}</p>
            <button onClick={() => toggleSensor(name)}>
                {sensor.enabled ? 'Disable' : 'Enable'}
            </button>
        </div>
    );
}

const Dashboard = () => {
    return (
        <div>
            <h1>Sensor Dashboard</h1>
            <Sensor name="temperature" />
            <Sensor name="humidity" />
        </div>
    );
};

export default Dashboard;