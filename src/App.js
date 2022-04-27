import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, Portfolio, OurReferences } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/info' element={<OurReferences />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
