import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Hello Router</h1>
            <button onClick={() => { navigate("/user") }}>跳转用户页面</button>
        </div>
    );
}

function DashBoard() {
    return (
        <div>
            <h1>仪表板</h1>
            <Outlet />
        </div>
    );
}

function User() {
    return (
        <h1>User</h1>
    );
}

function System() {
    return (
        <h1>系统</h1>
    );
}

function NotMatch() {
    return (
        <h1>404</h1>
    );
}

function LayoutPage() {
    return (
        <div>
            <h1>这是 Layout Page</h1>
            <Outlet></Outlet>
        </div>
    );
}

function MyRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutPage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/dashboard" element={<DashBoard />}>
                        <Route path="user" element={<User />}></Route>
                        <Route path="system" element={<System />}></Route>
                    </Route>
                    <Route path="*" element={<NotMatch />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}
export default MyRouter;