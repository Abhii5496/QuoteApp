import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [quote , setQuote]= useState("")

  const getQuotes = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      console.log(response);
      setQuote(response.data.slip.advice)
      
    })
  }


  return (
    <>
    <div className="App" >
    <div className='heading'>
      <h2 className="">Quote</h2>
    </div>
    
    <div className='box'>
     <h1 className='quote' > {quote}  </h1>
    <button className='getQuotes' onClick={getQuotes} >Press me !</button>

     </div>

    </div>
    </>
  );
}

export default App;
