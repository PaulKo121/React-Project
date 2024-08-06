import React from 'react';
import Sensor from './Sensor';

function SensorList() {
    const sensors = [
        { name: '溫度感測器', isOnline: true },
        { name: '濕度感測器', isOnline: false },
        { name: '壓力感測器', isOnline: true },
        { name: '光線感測器', isOnline: false },
    ];

    return (
        <section>
            <h1>儀表板</h1>
            <h1>感測器狀態監控</h1>
            <ul>
                {sensors.map((sensor, index) => (
                    <Sensor
                        key={index}
                        name={sensor.name}
                        isOnline={sensor.isOnline}
                    />
                ))}
            </ul>
        </section>
    );
}

export default SensorList;