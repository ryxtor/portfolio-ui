import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <p className="font-bold underline">Hello!</p>
      <About />
      <Contact />
      <Projects />
    </>
  );
}

export default App;
