import { Link } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function CardsAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/home"className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/performance"  className="nav-link active" aria-current="page">Performance</Link>
        <Link to="/examRegistration" className="nav-link">Registration</Link>
        <Link to="" className="nav-link">Seating Arrangement</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
export default CardsAdmin;
