import logo from './logo.svg';
import './App.css';

function App() {
  let num = 1;
  let str = "1";
  let obj = {
    name: "123"
  };
  let arr = ["1", "2", "3"];
  return (
    <div>
      <h1>JSX中的表达式</h1>
      <h2>{num}</h2>
      <h2>{str}</h2>
      <h2>{str + num}</h2>
      {/* Bool null undefined 值不能够直接显示 */}
      <h2>bool: {true}</h2>
      <h2>null: {null}</h2>
      <h2>undefined: {undefined}</h2>
      {/* 渲染对象字面量报错 */}
      {/* <h2>obj: {obj}</h2> */}
      <h2>arr: {arr}</h2>
      <h2>{<span>123</span>}</h2>
    </div>
  );
}

export default App;
