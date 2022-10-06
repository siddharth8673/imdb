import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import 'react-loading-skeleton/dist/skeleton.css'


import  Movie from './components/movieList/movieList'
import MovieDetail from './pages/MovieDetail/MovieDetail'
const App = () => {
  return (
   <div className='App'>
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/movies/:type/movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/movies/:type' element={<Movie/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
      </Routes>
   </Router>
   </div>
  )
}

export default App