import React, { createContext, useState, useContext, } from "react";

// 創建一個Context
const SensorContext = createContext();

// 創建一個Provider
export const SensorProvider = ({ children }) => {
    const [sensor, setSensor] = useState({
        temperature: { value: "25", enable: true },
        humidity: { value: "60", enable: true },
    });

    const toggleSensor = (sensorName) => {
        setSensor((prevSensors) => ({
            ...prevSensors,
            [sensorName]: {
                ...prevSensors[sensorName],
                enable: !prevSensors[sensorName].enabled,
            }
        }));
    };

    return (
        <SensorContext.Provider value={{ sensor, toggleSensor }}>
            {children}
        </SensorContext.Provider>
    );
};

//自定義Hook 來使用SensorContext
export const useSensors = () => {
    return useContext(SensorContext);
}