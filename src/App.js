import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Showcase from './pages/Showcase';
import Separator from './components/Separator';
import Skills from './pages/Skills';
import SeparatorBottom from './components/SeparatorBottom';
import 'react-toastify/dist/ReactToastify.css';
import SeparatorFooter from './components/SeparatorFooter';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Showcase />
      <Separator />
      <About />
      <Skills />
      <SeparatorBottom />
      <Projects />
      <Separator />
      <Contact />
      <SeparatorFooter />
      <Footer />
    </>
  );
}

export default App;
