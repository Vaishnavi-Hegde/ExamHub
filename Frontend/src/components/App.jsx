import Home from './Home';
import Login from './Login';
import Register from './Register';
import MainLogin from './MainLogin';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginAdmin from './LoginAdmin';
import RegisterA from './RegisterA';
import Performance from './Performance';
import ExamRegistration from './ExamRegistration';
import Backlog from './forms/Backlog';
import HomeAdmin from './HomeAdmin';
import AddAnnoucement from './AddAnnouncement';
import AddSeating from './AddSeating';


function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<MainLogin/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/registerA" element ={<RegisterA/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/loginAdmin" element ={<LoginAdmin/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/homeAdmin" element ={<HomeAdmin/>} />
          <Route path="/performance" element={<Performance/>}/>
          <Route path="/examRegistration" element={<ExamRegistration/>}/>
          <Route path="/addAnnoucements" element={<AddAnnoucement/>}/>
          <Route path="/addSeatingArragement" element={<AddSeating/>}/>
          
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
