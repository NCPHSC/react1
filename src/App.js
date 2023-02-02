import React, { createContext } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  //context API
 const UserContext = createContext();

    return(
      <UserContext.Provider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </Router>
      </UserContext.Provider>
      
    )
}

export default App