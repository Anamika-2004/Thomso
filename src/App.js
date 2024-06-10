
import './App.css';
import Hero from './components/Hero.js';
import Features from './components/Features.js';
import Card_1 from './components/Card_1.js';
import Business from './components/Business.js';
import Mini from './components/Mini.js';
import Testimonial from './components/Testimonial.js';
import Faq from './components/Faq.js';
import Newsletter from './components/Newsletter.js';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
      <Card_1/>
      <Business/>
      <Mini/>
     <Testimonial/>
     <Faq/>
     <Newsletter/>
    </div>
  );
}

export default App;
