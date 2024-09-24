import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {Routes} from './components';

function App() {
  
  const hello = [
    {name: "john", age: 30},
    {name: "doe", age: 25}
  ];

  useEffect(( ) => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/tasks");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error)
      }
    } fetchData();
  }, []);

  const [count, setCount] = useState(0); //currently, count should equal 0

  return (
    <>
    <Navbar/>
    {count}
    <button onClick={() => setCount(count + 1)}></button>
    <Routes/>
   
  {
    hello.map(({name, age}, index) => (
    <h1 key={index} className='text-3xl font-bold underline text-slate-800'>{name}, their age is {age}
    </h1>
  ))}  


 </>
  )
}

export default App
