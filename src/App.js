import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Showcase from './pages/Showcase';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
