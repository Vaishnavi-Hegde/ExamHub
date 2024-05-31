
import { Link } from "react-router-dom";
import "../App.css"
function Navbar() {
  return (
    <>
      <div className="Nav-div">
        <ul>
          <li>
          <Link to="/home" >ExamHub</Link>
          </li>
          <li>
          <Link to="/performance">Preformance</Link>
          </li>
          <li>
          <Link to="/examRegistration">Registration</Link>
          </li>
          <li>
          <Link to="/examSeating">Exam Seating</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
