import React from "react";

function Table({ semester }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th className="text-center" colSpan="5">{`Semester ${semester.semesterNumber}`}</th>
          <th className="text-right" colSpan="1">SGPA</th>
          <th className="text-right" colSpan="1">{semester.sgpa}</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>CIE</th>
          <th>SEM End</th>
          <th>Grade</th>
          <th>Credits</th>
          <th>Earned Credits</th>
          <th>Grade Points</th>
        </tr>
      </thead>
      <tbody>
        {semester.subjects.map((subject, subIndex) => (
          <tr key={subIndex}>
            <td>{subject.name}</td>
            <td>{subject.cie}</td>
            <td>{subject.see}</td>
            <td>{subject.grade}</td>
            <td>{subject.credit}</td>
            <td>{subject.gradePoint ? subject.credit : 0}</td>
            <td>{subject.gradePoint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
