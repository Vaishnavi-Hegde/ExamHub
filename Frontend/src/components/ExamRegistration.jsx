import Footer from "./Footer";
import Navbar from "./Navbar";
import Regtile from "./Regtile";
import { Link } from "react-router-dom";
function ExamRegistration() {
  return (
    <>
      <Navbar />
      <div className="regtile-wrapper">
      <Link to="/backlog">
        <Regtile
          FormName="APPLICATION FOR REEVALUATION"
        />
        </Link>
        <Link to="/update">
        <Regtile
          FormName="APPLICATION FOR MAKE-UP"
        />
        </Link>
        <Link to="/update">
        <Regtile
          FormName="APPLICATION FOR BACKLOG EXAM "
        />
        </Link>
        <Link to="/update">
        <Regtile
          FormName="APPLICATION FOR GRADE CORRECTION ID"
        />
        </Link>
        <Link to="/update">
        <Regtile
          FormName="APPLICATION FOR PROVISIONAL DEGREE CERTIFICATE"
        />
        </Link>
        <Link to="/update">
        <Regtile FormName="APPLICATION FOR TRANSCRIPT" />
        </Link>
        <Link to="/update">
        <Regtile FormName="APPLICATION FOR CGPA TO PRECENTAGE CONVERSION" />
        </Link>
        <Link to="/update">
        <Regtile FormName="APPLICATION FOR DUPLICATE GRADE CARD" />
        </Link>
        <Link to="/update">
        <Regtile FormName="APPLICATION FOR DUPLICATE ADMISSION TICKET" />
        </Link>
        <Link to="/update">
        <Regtile FormName="APPLICATION FOR DUPLICATE PROVISIONAL DEGREE CERTIFICATE" />
        </Link>
      </div>
      <Footer />
    </>
  );
}
export default ExamRegistration;
