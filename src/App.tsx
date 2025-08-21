import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Products from './components/Products';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <About />
      <Products />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
