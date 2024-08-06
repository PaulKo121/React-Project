import React, { Component } from "react";

class LifecycleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Constructor");
    }

    //增加計數器
    toggleCount = () => {
        this.setState(
            PrevState => ({
                count: PrevState.count + 1
            })
        );
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component did unmount");
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.toggleCount}>增加</button>
            </div>
        );
    }
}

export default LifecycleDemo;