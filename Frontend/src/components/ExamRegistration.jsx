import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Regtile from "./Regtile";
import "../Registration.css"
import "../App.css"; // Ensure you import the CSS file

function ExamRegistration() {
  const forms = [
    { to: "/reevalutionform", FormName: "APPLICATION FOR REEVALUATION" },
    { to: "/makeupform", FormName: "APPLICATION FOR MAKE-UP" },
    { to: "/backlogform", FormName: "APPLICATION FOR BACKLOG EXAM" },
    { to: "/gradecorrectionform", FormName: "APPLICATION FOR GRADE CORRECTION ID" },
    { to: "/degreeCertificateform", FormName: "APPLICATION FOR PROVISIONAL DEGREE CERTIFICATE" },
    { to: "/duplicatedegreeCertificateform", FormName: "APPLICATION FOR DUPLICATE PROVISIONAL DEGREE CERTIFICATE" },
    { to: "/transcriptForm", FormName: "APPLICATION FOR TRANSCRIPT" },
    { to: "/cgpatopreForm", FormName: "APPLICATION FOR CGPA TO PRECENTAGE CONVERSION" },
    { to: "/gradeCardForm", FormName: "APPLICATION FOR DUPLICATE GRADE CARD" },
    { to: "/duplicateAdmissionTicketForm", FormName: "APPLICATION FOR DUPLICATE ADMISSION TICKET" },
    ,
  ];
  const Regtile = ({ FormName }) => (
    <div className="card">
      <h2>{FormName}</h2>
    </div>
  );
  return (
    <>
      <Navbar />
      <h1 style={{ marginTop: "20px", textAlign: "center", color: "#333" }}>Registration</h1>
      <div className="scrollable-content">
        <div className="container mt-4">
          <div className="row">
            {forms.map((form, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <Link to={form.to} className="text-decoration-none">
                  <Regtile FormName={form.FormName} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExamRegistration;
