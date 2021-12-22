import { useState, useEffect, useCallback } from "react";
import DemoMemo from "./useCallback";
import Router from "./router";

// 自定义一个 hook
function useFormatTitle(title) {
  return "--" + title + "--";
}
// 实现一个 useAsyncFn
function useAsyncFn(asyncFn, deps) {
  // 设置请求返回结果
  let [res, setRes] = useState(null);
  let doFetch = useCallback(
    () => {
      return asyncFn().then(res => {
        setRes(res);
      }).catch(err => console.log(err));
    },
    [asyncFn],
  )
  return [res, doFetch];
}

function App() {
  // 第二个参数为修改前面值的方法，调用方法引起视图重新更新
  let [str, setStr] = useState("hello");
  let [num, setNum] = useState(99);
  let [obj, setObj] = useState({ name: "Thomas" });

  // 1.第二个参数为空时，组件挂载和刷新都执行，相当于componentDidMount和componentDidUpdate合体
  useEffect(() => {
    console.log("App 组件挂载了或更新了");
  });
  // 2.第二个参数是一个空数组，相当于 componentDidMount
  useEffect(() => {
    console.log("App 组件挂载了");
  }, []);
  // 3.第二个参数不为空，且不是空数组
  useEffect(() => {
    console.log("num 更新了", num);
  }, [num]);

  // 使用自定义 hook
  let title = useFormatTitle("haha");
  return (
    <div>
      <h1>我的第一个Hook</h1>
      <h2>{str}</h2>
      <h2>{num}</h2>
      <h2>{obj.name}</h2>
      <button onClick={() => { setNum(num + 1) }}>Num + 1</button>
      <DemoMemo />
      <h2>{title}</h2>
      <Router />
    </div>
  );
};
export default App;