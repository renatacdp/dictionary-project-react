import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <h1>What word do you want to look up today?</h1>
      <Dictionary />
    </div>
  );
}
