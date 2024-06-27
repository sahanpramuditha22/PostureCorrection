import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../posture/src/Components/Header';
import Dashboard from './Components/dashboard';
import Feedback from './Components/feedback';
import Home from './Components/Home';


import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </Router>
      
        
       
      </header>
    </div>
  );
}


export default App;


