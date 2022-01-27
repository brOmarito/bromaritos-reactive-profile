import React, { useState } from 'react';
import './App.css';
import BootNav from './components/BootNav';
import PortfolioBody from './components/PortfolioBody';
import Footer from './components/Footer';

function App() {

  const [currPage, setCurrPage] = useState('AboutMe');

  return (
    <div className="App">
      <BootNav currPage={currPage} setCurrPage={setCurrPage} />
      <PortfolioBody currPage={currPage} setCurrPage={setCurrPage} />
      <Footer />
    </div>
  );
}

export default App;
