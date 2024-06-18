import balon from './balon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={balon} className="App-logo" alt="logo" />
     
        <a
          className="App-link"
          href="inicio.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          G-STATS
        </a>
      </header>
    </div>
  );
}

export default App;
