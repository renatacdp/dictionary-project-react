import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <container className="App">
      <header className="App-header">Dictionary</header>
      <h1>What word do you want to look up?</h1>
      <Dictionary />
      <footer>
        <a href="https://github.com/renatacdp/dictionary-project-react">
          Open-source code
        </a>{" "}
        by Renata Pinto 👩‍💻
      </footer>
      <span className="spacing">space</span>
    </container>
  );
}
