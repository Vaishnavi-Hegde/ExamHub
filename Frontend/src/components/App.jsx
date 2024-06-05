import Home from './Home';
import Login from './Login/Login';
import RegisterStudent from './Register/RegisterStudent';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterAdmin from './Register/RegisterAdmin';
import Performance from './Performance';
import ExamRegistration from './ExamRegistration';
import HomeAdmin from './HomeAdmin';
import AddAnnoucement from './AddAnnouncement';
import AddSeating from './AddSeating';
import ReevalutionForm from './forms/ReevalutionForm';
import MakeupForm from './forms/MakeupForm';
import BacklogForm from './forms/BacklogForm';
function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/admin/login" element ={<Login type='admin'/>} />
          <Route path="/student/login" element ={<Login type='student'/>} />
          <Route path="/admin/register" element ={<RegisterAdmin/>} />
          <Route path="/student/register" element ={<RegisterStudent/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/homeAdmin" element ={<HomeAdmin/>} />
          <Route path="/performance" element={<Performance/>}/>
          <Route path="/examRegistration" element={<ExamRegistration/>}/>
          <Route path="/addAnnoucements" element={<AddAnnoucement/>}/>
          <Route path="/addSeatingArragement" element={<AddSeating/>}/>
          <Route path="/reevalutionform" element={<ReevalutionForm/>}/>
          <Route path="/makeupform" element={<MakeupForm/>}/>
          <Route path="/backlogform" element={<BacklogForm/>}/>
        </Routes>
      </BrowserRouter>
      
   
  )
}

export default App
