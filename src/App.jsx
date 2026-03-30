import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
//import RouterDemo from './components/Router'
import NavBar from './components/NavBar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import WatchListWrapper from './context/WatchListContext'
import Counter from './components/Counter'
import User from './components/User'
import MovieTrailer from './components/Trailer'

function App() {
  return (
    <>
     {/* <RouterDemo/> */}
     <NavBar/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/watchlist" element={<WatchListWrapper><WatchList/></WatchListWrapper>}></Route>
     <Route path="/counter" element={<Counter/>}></Route>
     <Route path="/user" element={<User/>}></Route>
     <Route path='/trailer/:id' element={<MovieTrailer/>}></Route>
     </Routes>
    </>
  )
}

export default App
