import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Members from '../views/Members'
import Home from '../views/Home';
import Agreements from '../views/Agreements';
import Contact from '../views/Contact';

const App = () => {


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agreements">Agreements</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agreements' element={<Agreements />} />
        <Route path='/members' element={<Members />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Members /> */}
    </>
  );
};

export default App;
