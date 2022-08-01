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
      <div className="h-[100px] md:h-[200px] top">
        <svg className="fill-gray-300 w-[100vw] h-[100%]" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          />
        </svg>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
