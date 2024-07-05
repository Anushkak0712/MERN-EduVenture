import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  const [data,setData]=useState(null)
  useEffect(()=>{
    fetch('http://localhost:7070/*')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{data?data.message:"loading"}</h1>
      </header>
    </div>
  );
}

export default App;
