import { evaluate } from 'mathjs';
import './App.css';
import Button from './components/Button.jsx';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import LogoFCC from './components/LogoFCC';

function App() {

  const [input, setInput] = useState('');

  const handleInput = (val) => setInput(input + val);

  const onClearTapped = () => setInput('');

  const evaluateOperation = () => {
    if (input) setInput(evaluate(input));
  };

  return (
    <div className="App">
      <LogoFCC />
      <div className='calculator-container'>
        <Screen value={input}/>
        <div className='row'>
          <Button handleInput={handleInput}>1</Button>
          <Button handleInput={handleInput}>2</Button>
          <Button handleInput={handleInput}>3</Button>
          <Button handleInput={handleInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleInput={handleInput}>4</Button>
          <Button handleInput={handleInput}>5</Button>
          <Button handleInput={handleInput}>6</Button>
          <Button handleInput={handleInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleInput={handleInput}>7</Button>
          <Button handleInput={handleInput}>8</Button>
          <Button handleInput={handleInput}>9</Button>
          <Button handleInput={handleInput}>*</Button>
        </div>
        <div className='row'>
          <Button input={input} handleInput={evaluateOperation}>=</Button>
          <Button handleInput={handleInput}>0</Button>
          <Button handleInput={handleInput}>.</Button>
          <Button handleInput={handleInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={onClearTapped}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
