import React, { useState } from 'react';
import './App.css';

function App() {

  const minAmount = 500;
  const maxAmount = 250000;
  const [amount, setAmount] = useState(18300);

  const handleChange = (event) => {
    setAmount(event.target.value);
  }

  const onChangeText = (event) => {
    let value = event.target.value;
    if (value.indexOf("€") === 0) {
      value = value.slice(1);
    }
    setAmount(value);
  }

  const onBlurText = () => {
    if(amount < minAmount) {
      setAmount(minAmount);
    }
    else if (amount > maxAmount) {
      setAmount(maxAmount);
    }
  }

  return (
    <div style={{margin: '10px'}}>
      <div style={{background: 'grey', margin: '20px', padding: '20px', textAlign: 'center'}}>
        <h1 style={{color: 'white'}}>
          Lending made easy
        </h1>
        <div style={{color: 'white', margin: '10px'}}>Earn upto ~1.16% a year across a wide range of P2P sites with InvestUP</div>
        <button>Get Started</button>
      </div>
      <div style={{margin: '10px', textAlign: 'center'}}>
        With  <input style={{width: '100px', fontSize: '18px', color: '#4285f4'}} type="text" value={"€" + amount} onChange={onChangeText} onBlur={onBlurText} />  your estimated earnings could be <input style={{width: '100px', fontSize: '16px', color: '#00ff7f'}} type="text" value={"€" + (amount * 1.16/100).toFixed(2)} readOnly /> per year with fees of just <input style={{width: '100px', fontSize: '16px', color: 'green'}} type="text" value={"€" + (amount * 1.16/1000).toFixed(2)} readOnly /> per year.
      </div>
      <div style={{margin: '10px', textAlign: 'center'}}>
      <input 
      style={{width: '80%'}}
      id="typeinp" 
      type="range" 
      min={minAmount} max={maxAmount} 
      value={amount} 
      onChange={handleChange}
      step="100"/>
      </div>
    </div>
  );
}

export default App;
