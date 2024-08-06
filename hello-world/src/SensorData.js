import React, { Component } from "react";
import Dashboard from "./Dashboard";

class SensorData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sensorData: []
        }
    }

    fetchSensorData = () => {
        //模擬傳感器數據請求
        const newSensorData = {
            temperature: (Math.random() * 30).toFixed(2), //隨機溫度數據
            humidity: (Math.random() * 100).toFixed(2), //隨機濕度數據
            timestamp: new Date().toLocaleTimeString() //當前時間戳
        }

        this.setState(
            prevState=>({
                sensorData: [newSensorData,...prevState.sensorData]
            }
            ));
        console.log(`感測器數據接收: `, newSensorData);
    }

    // 每分鐘更新一次數據
    componentDidMount() {
        console.log('更新數據');
        this.fetchSensorData();

        this.timerID = setInterval(() => this.fetchSensorData(), 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sensorData.timestamp !== this.state.sensorData.timestamp) {
            console.log(`資料更新成功: ${this.state.sensorData.temperature},${this.state.sensorData.humidity},${this.state.sensorData.timestamp}`);
        }
    }

    componentWillUnmount() {
        //清除
        clearInterval(this.timerID);
        console.log("元件將被關閉，計時停止");
    }

    render() {
        return (
                <Dashboard data={this.state.sensorData}/>
            // <>
            //     <h1>感應器資料</h1>
            //     <p>攝氏溫度: {this.state.sensorData.temperature}℃</p>
            //     <p>濕度: {this.state.sensorData.humidity}</p>
            //     <p>最後更新時間: {this.state.sensorData.timestamp}</p>
            // </>
        );
    }
}

export default SensorData;