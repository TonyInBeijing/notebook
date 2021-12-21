import React, { useState, useEffect, useCallback } from 'react';

function Demo() {
    useEffect(() => {
        console.log("Demo 组件更新了");
    });
    return (
        <h1>Demo 组件</h1>
    );
};

// React.memo 高性能组件
// 高阶组件

let WrappedDemo = React.memo(Demo);

export default function App() {
    let [num, setNum] = useState(1);

    const handleClick = useCallback(() => {
        console.log("456");
    }, []);
    return (
        <div>
            <WrappedDemo handleClick={handleClick}></WrappedDemo>
            <h2>{num}</h2>
            <button onClick={() => { setNum(num + 1) }}>点击</button>
        </div>
    );
};