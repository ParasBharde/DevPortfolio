import React,{ useState } from 'react'
import './App.css'
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
    <div ><Header /></div>
    <div> 
      
    <HeroSection/>
    <Skills/>
    <Project/>
    <Contact/></div>

    
    </div>
  )
}

export default App
