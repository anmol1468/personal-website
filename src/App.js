import './App.scss';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Skills from './components/skills/Skills';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Info />
      <Skills />
      <ProjectDisplay />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
