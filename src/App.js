import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, MainPortfolio } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/portfolio' element={<MainPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
