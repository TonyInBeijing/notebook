import React from "react";
export default class App extends React.Component {
    state = {
        num: 99
    };
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        num: this.state.num + 1
                    });
                }}>{this.state.num}</button>
            </div>
        );
    }
}