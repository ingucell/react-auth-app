import React from 'react';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
    </Routes>
   </Router>
    
   </>
  );
}

export default App;
