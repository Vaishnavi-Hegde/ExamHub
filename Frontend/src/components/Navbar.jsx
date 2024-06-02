import { Link } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ADMIN_LINKS, STUDENT_LINKS } from "./links";

function Navbar({ type = "student" }) {
  const links = type === "student" ? STUDENT_LINKS : ADMIN_LINKS;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top"> {/* Added bg-dark and navbar-dark classes */}
        <div className="container-fluid">
          <Link to={type === "student" ? "/home" : "/homeAdmin"} className="navbar-brand">
            ExamHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {links.map(({ to, title }) => (
                <Link key={title} to={to} className="nav-link">
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
