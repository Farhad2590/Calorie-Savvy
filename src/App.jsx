import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Want from './components/Want/Want'


function App() {

  const [wantCook, setWantCook] =useState([])

  const handleCooking = cook =>{
    const newCook = [...wantCook , cook]
    setWantCook(newCook);
  }

  return (

    <div className="container mx-auto w-[90%]">
      <Header></Header>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='flex gap-5 mb-10'>
        <Card handleCooking={handleCooking}></Card>
        <Want wantCook={wantCook}></Want>
      </div>
    </div>

  )
}

export default App
