import React from 'react';
import './App.css';
import Home from './Components/Home';
import Mainpage from './Todo/Mainpage';
// import Count from './Components/Count';
// import Map from './Components/Map';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Access from './Components/Access';




function App() {



  return (
    <div className='App'>
      {/* <Navbar />
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/access' element={<Access />} />
          </Route>

        </Routes>
      </BrowserRouter> */}

    <Mainpage/> 
  

    </div>
  );
}

export default App;
