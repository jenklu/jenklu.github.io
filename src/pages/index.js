import React from "react"

class Counter extends React.Component{
    constructor() {
        super();
        this.state = { count: 0 }
    }
    count(change) {
        this.setState(prevState => ({
            count: prevState.count + change,
        }));
    }
    render() {
        return (
            <div>
                <h1> Counter </h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.count(1)}> plus </button>
                <button onClick={() => this.count(-1)}> minus </button>
            </div>
        ) 
    }
}

export default Counter;