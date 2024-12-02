
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '=') {
      try {
        setResult(eval(input)); 
      } catch {
        setResult('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };
  
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Noturno'}
      </button>
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input || '0'}</div>
          <div className="result">{result !== null ? `= ${result}` : ''}</div>
        </div>
        <div className="buttons">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;

