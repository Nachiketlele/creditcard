import logo from './logo.svg';
import './App.css';
import Pin from './components/Pin';
import { useState } from 'react';

function App() {
  const [otp, setOtp] = useState("")

  return (
    <div className="App">
        <Pin length={4} otp = {otp}  setOtpHandler={(value)=>{setOtp(value)}}/>
        
        <h1>The value of otp is {otp}</h1>        
    </div>
  );
}

export default App;
