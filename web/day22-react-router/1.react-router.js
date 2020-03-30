import react, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const SettingComponent = React.lazy(() => import('./setting'));
class App extends Component {
    goDetail() {
        this.props.history.push('/detail/  ' + 123);
    };
    render() {
        return (<div>123</div>);
    }; 
}

class Detail extends Component {
    render() {
        return (<div>我是详情页，id={this.props.match.param.id}</div>);
    }
}

const AppContainer = () => {
    return (
        <BrowserRouter>
            <Route path="/home/setting" render={props => {
                return (<Suspense fallback={<div>loading</div>}>
                    <SettingComponent />
                </Suspense>);
            }}></Route>
            <Route path="/home" component={App}></Route>
            {/* renderProps */}
            <Route path="/detail/:id" component={Detail}></Route>
        </BrowserRouter>
    )
};