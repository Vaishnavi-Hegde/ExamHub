// import CardsAdmin from "./CardsAdmin";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function HomeAdmin() {
  return (
    <>
      <Navbar />
      <br/>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add Student</h5>
          <Link to="/register" class="btn btn-primary">ADD</Link>
        </div>
      </div>
      <br/>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add Announcements</h5>
          <Link to="/addAnnoucements" class="btn btn-primary">ADD</Link>
        </div>
      </div>
      <br/>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add Seating Arrangement</h5>
          <Link to="/addSeatingArragement" class="btn btn-primary">ADD</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomeAdmin;
