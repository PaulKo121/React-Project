import React from "react";
import { useSensors } from "./SensorContext";

const Dashboard = () => {
    const { sensor, toggleSensor } = useSensors();
    const temp = sensor["temperature"];
    const humi = sensor["humidity"];

    if (!temp || !humi) {
        return <p>Sensor data not available.</p>;
    }

    return (
        <div>
            <h1>Sensor Dashboard</h1>
            <h2>Temperature Sensor</h2>
            <p>Status: {temp.enable ? 'Enabled' : 'Disabled'}</p>
            <p>Temperature: {temp.value}℃</p>
            <button onClick={() => toggleSensor("temperature")}>
                {temp.enable ? 'Disable' : 'Enable'}
            </button>
            <h2>Humidity Sensor</h2>
            <p>Status: {humi.enable ? 'Enabled' : 'Disabled'}</p>
            <p>Humidity: {humi.value}％</p>
            <button onClick={() => toggleSensor("humidity")}>
                {humi.enable ? 'Disable' : 'Enable'}
            </button>
        </div>
    );
}

export default Dashboard;
