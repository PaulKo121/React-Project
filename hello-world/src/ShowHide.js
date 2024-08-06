import React, { Component } from "react";
import UserProfile from "./UserProfile";
import LifecycleDemo from "./LifecycleDemo";
import SensorData from "./SensorData";

class ShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserProfile: true
        };
    }

    // 切換 UserProfile 組件顯示狀態
    toggleUserProfile = () => {
        this.setState(prevState => ({
            showUserProfile: !prevState.showUserProfile
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleUserProfile}>
                    {this.state.showUserProfile ? '關閉' : '啟動'} 傳感器資料
                </button>
                {this.state.showUserProfile && <SensorData />}
            </div>
        );
    }
}

export default ShowHide;