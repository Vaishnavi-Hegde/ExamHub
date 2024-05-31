import Home from './Home';
import Login from './Login';
import Register from './Register';
import MainLogin from './MainLogin';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginAdmin from './LoginAdmin';
import RegisterA from './RegisterA';


function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<MainLogin/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/registerA" element ={<RegisterA/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/loginAdmin" element ={<LoginAdmin/>} />
          <Route path="/home" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
