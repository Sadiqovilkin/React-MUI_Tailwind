import { useEffect, useState } from 'react'
import { getAll } from './API/reguest'
import './App.css'
import Home from './components/pages/home/Home'

function App() {
  const [data , setData] = useState([])
 const getData= ()=>{

   getAll("artist").then((res)=>{
     setData(res.data)
  })
 }
 
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
     <Home getData={getData} data={data} setData={setData}/>
    </>
  )
}

export default App
