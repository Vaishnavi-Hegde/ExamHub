import { NavLink } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ADMIN_LINKS, STUDENT_LINKS } from "./constants";

function Navbar({ type = "student" }) {
  const links = type === "student" ? STUDENT_LINKS : ADMIN_LINKS;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <NavLink to={type === "student" ? "/home" : "/homeAdmin"} className="navbar-brand">
            ExamHub
          </NavLink>
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
                <NavLink
                  key={title}
                  to={to}
                  className="nav-link"
                  activeClassName="active"
                >
                  {title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
