import { Suspense } from 'react'
import './App.css'
import Footer from './assets/Components/Footer/Footer'
import MainPage from './assets/Components/MainPage/MainPage'
import Navbar from './assets/Components/Navbar/Navbar'


const fetchData = async ()=>
{
  const res = await fetch('/tickets.json')
  return res.json()
}

function App() {

  const fetchDataApi = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <MainPage fetchDataApi={fetchDataApi}></MainPage>
      <Footer></Footer>

    </>
  )
}

export default App
