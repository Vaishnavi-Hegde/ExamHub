import Navbar from "./Navbar";
import Footer from "./Footer";
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";
function Performance() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student details when the component mounts
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    axios.get("http://127.0.0.1:3001/api/student/getStudent/" + localStorage.getItem('email'))
      .then(result => {
        const studentData = result.data ?? null;
        if (studentData) {
          // Calculate total credits
          let total = 0;
          studentData.semesters.forEach(semester => {
            semester.subjects.forEach(subject => {
              total += subject.credit;
            });
          });
          studentData.totalCredits = total

          // Calculate credits scored
          let scored = 0;
          studentData.semesters.forEach(semester => {
            semester.subjects.forEach(subject => {
              if (subject.gradePoint !== 0) {
                scored += subject.credit;
              }
            });
          });
          studentData.creditsScored = scored

        }
        const sortedStudent = result.data ? { ...result.data, semesters: result.data.semesters.sort((a, b) => a.semesterNumber - b.semesterNumber) } : null;
        setStudent(sortedStudent);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar />
      {
        student && <div className="scrollable-content" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <h1 style={{ marginTop: "20px", textAlign: "center", color: "#333" }}>Performance</h1>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-md-3">
            <img src={'http://127.0.0.1:3001/'+student.photo} alt="Student" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-9">
            <h3>{student.usn}</h3>
            <h4>{student.name}</h4>
            <div className="row">
              <div className="col-md-4">
                <strong>Total Credits:</strong> {student.totalCredits}
              </div>
              <div className="col-md-4">
                <strong>Credits Scored:</strong> {student.creditsScored}
              </div>
              <div className="col-md-4">
                <strong>CGPA:</strong> {student.cgpa}
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        student?.semesters?.map((semester, index) => (
          <Table key={index} semester={semester} />
        ))
      }
    </div >
      }
<Footer />
    </>
  );
}

export default Performance;
