
import './App.css'; 
import React from 'react';
import Counter from './Components/Counter';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';



const App = () => {
  return (
   <>
   <Navbar/>
    <Routes>
       <Route path='' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;



