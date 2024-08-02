import react from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './Home';
import Courses from './Courses';
import Signup from './Signup';

function App() {
  
  return (
    <>
     {/* <Home/> */}
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Course" element={<Courses/>}/>
     <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    
    </>
  )
}

export default App
