import React from 'react';

class Loading extends Component {
    render() {
        return (<div></div>);
    }
}
function suspense(WrapComponent, func) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                status: "loading"
            }
        }
        init() {
            new Promise().then(res => {
                this.setState({ status: "fulfilled" });
            }).cathch(err => {
                this.setState({ state: 'rejected' });
            })
        }
        render() {
            const statusMap = {
                error: <Error />,
                loading: <Loading />,
                fulfilled: <WrapComponent />
            };
            const ResComponent = statusMap[this.state.status];
            return <ResComponent />;
        }
    }
}