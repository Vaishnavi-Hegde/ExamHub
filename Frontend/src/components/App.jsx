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
import GradeCorrectionForm from './forms/GradeCorrectionForm';
import ProvisionalDegreeCertificateForm from './forms/ProvisionalDegreeCertificateFrom';
import DuplicateDegreeCertificate from './forms/DuplicateDegreeCertificate';
import TranscriptForm from './forms/TranscriptForm';
import CgpaToPreForm from './forms/CgpaToPreFrom';
import DuplicateGradeCardForm from './forms/DuplicateGradeCardForm'
import DuplicateAdmissionTicketForm from './forms/DuplicateAdmissionTicketForm';
import PaymentPage from './PaymentPage';
import SeatingArrangement from './SeatingArrangement';
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
          <Route path="/gradecorrectionform" element={<GradeCorrectionForm/>}/>
          <Route path="/degreeCertificateform" element={<ProvisionalDegreeCertificateForm/>}/>
          <Route path="/duplicatedegreeCertificateform" element={<DuplicateDegreeCertificate/>}/>
          <Route path="/transcriptForm" element={<TranscriptForm/>}/>
          <Route path="/cgpatopreForm" element={<CgpaToPreForm/>}/>
          <Route path="/gradeCardForm" element={<DuplicateGradeCardForm/>}/>
          <Route path="/duplicateAdmissionTicketForm" element={<DuplicateAdmissionTicketForm/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
          <Route path='/seatingArrangement' element={<SeatingArrangement/>}/>
        </Routes>
      </BrowserRouter>
      
   
  )
}

export default App
