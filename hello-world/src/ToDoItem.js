import React, { Component } from "react";

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        // 初始化 state
        this.state = {
            status: null
        };
    }
    // 增加status的方法
    toggleStatus = () => {
        this.setState(prevState => {
            if (prevState.status === "Not complete") {
                return "complete";
            } else {
                return "Not complete";
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Task：</h1>
                <h2>Count: {this.state.status}</h2>
                <button onClick={this.toggleStatus}>Mark as {this.state.status}</button>
            </div>
        );
    }

}

export default ToDoItem;