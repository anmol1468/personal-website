import './App.scss';
import React, { useRef } from 'react';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Skills from './components/skills/Skills';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const scrollRef = useRef(null);

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Info handleButtonClick={handleButtonClick} />
      <Skills />
      <ProjectDisplay scrollRef={scrollRef} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
