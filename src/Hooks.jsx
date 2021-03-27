import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Hook() {
  const [reverse, setReverse] = useState(false);
  const [count, setcount] = useState(0);

  const reverseClass = reverse ? 'reverse' : ' ';
  const handleclick = () => {
    setReverse(!reverse);
  };
  const handleCount = () => {
    setcount((prevState) => prevState + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>{count}</h1>
        <p>
          <button type="button" onClick={handleclick}>
            {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleCount}>
            {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
