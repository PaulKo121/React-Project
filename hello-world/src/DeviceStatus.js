import React, { Component } from "react";

class DeviceStatus extends Component {
    render() {
        const { deviceName, status } = this.props;
        return (
            <div>
                <h1>{deviceName}</h1>
                <p>status:{status}</p>
            </div>
        );
    }
}

export default DeviceStatus;