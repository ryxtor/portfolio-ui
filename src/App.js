import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Showcase from './pages/Showcase';
import Separator from './components/Separator';
import Skills from './pages/Skills';
import SeparatorBottom from './components/SeparatorBottom';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Separator />
      <About />
      <Skills />
      <SeparatorBottom />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
