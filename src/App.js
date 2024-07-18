import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Character from './components/Character';
import Blog from './components/Blog';

function App() {
  
  return (
    <div className="App">
      <Router>
        < Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/character' element={<Character />} />
          <Route path='/about' element={<Blog />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
