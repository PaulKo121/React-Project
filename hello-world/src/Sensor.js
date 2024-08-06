import React from 'react';
function Sensor({ name, isOnline }) {
    if (!isOnline) {
        return null;
    }
    return <li className='sensor-item'>{name} - 在線</li>;
}

export default Sensor;