import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 模拟 useState 实现
// let val;
// function useState(initialValue) {
//   val = val || initialValue;
//   let setValue = (newVal) => {
//     val = newVal;
//     render();
//   };
//   return [val, setValue];
// }


// function App() {
//   let [num, setNum] = useState(0);
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => { setNum(num + 1); }}>ADD</button>
//     </div>
//   );
// }

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
