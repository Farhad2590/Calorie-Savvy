import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'


function App() {

  return (

    <div className="container mx-auto w-[90%]">
      <Header></Header>
      <Banner></Banner>
      <Recipe></Recipe>
      <Card></Card>
      {/* <h1>Vite + React</h1>
      <h1 className="text-3xl bg-slate-600">New</h1> */}
    </div>

  )
}

export default App
