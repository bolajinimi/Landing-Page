
import './App.css';
import  Navbar from './components/Navbar/index';
import HeroSection from './components/HeroSection/index';
import AboutSection from './components/AboutSection/index';
import Selected from './components/SelectedProduct/index';
import Product from './components/ProductFeatures/index';
import Get from './components/GetBestTea/index';
import AwardRecognition from './components/AwardRecognition/index';
import FAQ from './components/FAQs/index';
import Indulge from './components/IndulgeSection/index';
import Footer from './components/Footer/index';



function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Selected />
      <Product />
      <Get />
      <AwardRecognition />
      <FAQ />
      <Indulge />
      <Footer />
    </div>
  );
}

export default App;
