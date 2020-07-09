import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Talks from './Talks';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  return (
    <center>
    <Header/>
    <About/>
    <Projects/>
    <Talks/>
    <Portfolio/>
    <Footer/>
    </center>
  );
}

export default App;
