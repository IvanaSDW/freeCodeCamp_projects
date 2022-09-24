
import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import fccLogo from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [clicksCount, setCount] = useState(0);

  const handleClick = () => {
    setCount(clicksCount+1);
  };

  const restartCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className='fcc-logo-container'>
        <img className='fcc-logo' src={fccLogo} alt='freecodecamp logo' />
      </div>
      <div className='main-container'>
        <Counter clicksCount={clicksCount} />
        <Button
          text={'Click'}
          isClick={true}
          handleClick={handleClick}
        />
        <Button
          text={'Restart'}
          isClick={false}
          handleClick={restartCount}
        />
      </div>
    </div>
  );
}

export default App;
