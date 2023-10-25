import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Button } from '@chakra-ui/react';
import './styles/index.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Services from "./components/Services"
import Login from "./components/login"
import Signup from "./components/signup"
import Blog from "./components/Blog"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
