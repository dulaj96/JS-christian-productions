import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';

function App() {
  return (
    <Router>
      <div className="flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-background-dark font-display text-[#0d121b] dark:text-white transition-colors duration-300">
        <Header />
        <div>
          <Home />
        </div>
        
        <div id='about'>
           <About />
        </div>
       

        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
