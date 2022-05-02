import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, Portfolio, ApplicationPage, ContactsPage, OurReferences, MainEquipment } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/info' element={<OurReferences />} />
          <Route path='/equipment' element={<MainEquipment />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/application' element={<ApplicationPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
