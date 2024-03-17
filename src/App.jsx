import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import Want from './components/Want/Want'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [wantCook, setWantCook] = useState([])
  const [prepearing, setPrepearing] =useState([])

  const handleCooking = (cook) => {
    const isExist = wantCook.find(item => item.recipe_id == cook.recipe_id);
    if (!isExist) {
      const newCook = [...wantCook, cook]
      setWantCook(newCook);
    }
    else {
      toast("Already Added");
    }
  }
  const handlePrepearing = (cooking) =>{
    const newPrepearing = [...prepearing, cooking]
    setPrepearing(newPrepearing)
    const remaining = wantCook.filter(wantCook => wantCook.recipe_id !== cooking.recipe_id);
    setWantCook(remaining)
  }
   return (

    <div className="container mx-auto w-[90%]">
      <Header></Header>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='flex gap-5 mb-10 mt-10'>
        <Card
          handleCooking={handleCooking}
        ></Card>
        <Want wantCook={wantCook}
          handlePrepearing={handlePrepearing} prepearing={prepearing}></Want>
        <ToastContainer />
      </div>
    </div>

  )
}

export default App
