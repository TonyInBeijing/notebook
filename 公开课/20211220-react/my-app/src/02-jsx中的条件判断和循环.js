function App() {
    let arr = ['1', '2', '3'];
    return (
      <div>
        <h1>JSX中的其他的语法</h1>
        <span>{true ? '真' : <span>123</span>}</span>
        <h1>{arr.map((item) => <span key={item}>{item}</span>)}</h1>
      </div>
    );
  }
  
  export default App;