import "./Assets/Styles/styles.css";
import ChartDiv from "./Components/ChartDiv";
import MyBalance from "./Components/MyBalance";
function App() {
  return (
    <div className="App">
      <div className="container">
        <MyBalance />
        <ChartDiv />
      </div>
    </div>
  );
}

export default App;
