import React from 'react';
import { ToastContainer } from 'react-toastify';
import DotLoader from 'react-spinners/DotLoader';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Showcase from './pages/Showcase';
import Separator from './components/Separator';
import Skills from './pages/Skills';
import SeparatorBottom from './components/SeparatorBottom';
import 'react-toastify/dist/ReactToastify.css';
import SeparatorFooter from './components/SeparatorFooter';
import Footer from './pages/Footer';

const Projects = React.lazy(() => import('./pages/Projects'));

const styling = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
};

if (localStorage.getItem('theme') === 'dark') {
  styling.background = '#1f2937 ';
  document.querySelector('html').setAttribute('class', 'dark');
}

const override = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  margin: 'auto auto',
};

function App() {
  return (
    <React.Suspense
      fallback={<div style={styling}><DotLoader duration={10000} cssOverride={override} color="#7e22ce" size={50} /></div>}
    >
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
    </React.Suspense>
  );
}

export default App;
