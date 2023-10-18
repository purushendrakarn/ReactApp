import './App.css';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Loogin from './Loogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Loogin' element={<Loogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
