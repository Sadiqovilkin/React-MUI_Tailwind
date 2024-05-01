import React from 'react'
import Cards from './cards/Cards'

const Home = ({data,setData,getData}) => {
  return (
    <main>
        <Cards getData={getData} data={data} setData={setData}/>
    </main>
  )
}

export default Home