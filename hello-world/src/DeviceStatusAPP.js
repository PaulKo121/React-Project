import React from "react";
import DeviceStatus from "./DeviceStatus";



function DeviceStatusAPP() {
    const data = [
        { deviceName: "Light", status: "On" },
        { deviceName: "Door Locker", status: "Locked" },
        { deviceName: "Thermometer", status: "22℃" }
    ];
    return (
        <div>
            {data.map((data) => (
                <DeviceStatus deviceName={data.deviceName} status={data.status} />
            ))}
        </div>
    );
}

export default DeviceStatusAPP;