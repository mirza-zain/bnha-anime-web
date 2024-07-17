import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Character from './components/Character';

function App() {
  return (
    <Router>
      <div className="App">
          < Navbar /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/character' element={<Character />} />
            <Route path='/about' element={<Home />} />
            <Route path='/contact' element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
