import React, { Component } from "react";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        //初始化
        this.state = {
            userData: null,
            loading: true,
            error: null,
            newName: "" //用來儲存名稱
        }
    }

    //當頁面讀取前，先設定Mount 函數
    componentDidMount() {
        //模擬API請求
        this.fetchData();

        //設置計時器，每秒更新一次
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick() {
        console.log("Ticking...");
    }

    fetchData() {
        fetch('https://httpbin.org/get')
            .then(response => response.json())
            .then(data => {
                //更新state 並設置loading為false
                this.setState({ userData: data, loading: false });
            })
            .catch(error => {
                //獲取錯誤訊息
                this.setState({ error: error.message, loading: false });
            })

    }

    //更新用戶姓名變更
    handleNameChange = (e) => {
        this.setState({ newName: e.target.value });
    }

    //更新名稱的方法
    UpdateName = () => {
        this.setState(prevState => ({
            userData: {
                ...prevState.userData,
                name: prevState.newName
            },
            newName: ""
        }));
    }

    //更新時執行的函數
    componentDidUpdate(prevProps, prevState) {
        // 檢查名稱是否有更新
        if (prevState.userData && prevState.userData.name !== this.state.userData.name) {
            console.log(`User name updated to: ${this.state.userData.name}`);
            // 你可以在這裡執行其他操作，比如發送更新通知
        }
    }

    //元件被移除時執行的函數
    componentWillUnmount() {
        //清除計時器
        clearInterval(this.timerID);
        console.log("元件將被關閉，計時停止");
    }

    render() {
        const { userData, loading, error, newName } = this.state;

        //處理載入中和錯誤的情況
        if (loading) {
            return <p>Loading...</p>
        }

        if (error) {
            return <p>Error: {error}</p>
        }

        //如果有用戶資料，顯示用戶資料
        return (
            <>
                <h1>用戶資料</h1>
                <p>Original: {userData.origin}</p>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <div>
                    <input type="text" value={newName} onChange={this.handleNameChange} placeholder="請輸入姓名"></input>
                    <button onClick={this.UpdateName}>更新姓名</button>
                </div>
            </>
        );
    }
}

export default UserProfile;