import { Link } from "react-router-dom";
//import "../stylesheets";
function MainLogin(){
    return(
    <>
        <div className="loginas">
    <div id="admin_side" className="admin_side">
      <div id="headerexam">
        <h2>ExamHub</h2>
        <p>Login As</p>
      </div>
       <Link to="/LoginAdmin">
        <div id="admin_side_border" classNameName="admin_side_border">
            <h3 className="heading_admin">Administrator</h3>
            <img src="" id="admin_img" className="admin_img"/>
        </div>
        </Link>
    </div>
    <Link to="/Login">
    <div id="student_side" className="student_side">
        <div id="student_side_border" className="student_side_border">
            <h3 className="heading_student">Student</h3>
            <img src="student.png" id="student_img" className="student_img"/>
        </div>
    </div>
    </Link>
</div>
        </>
    )
}
export default MainLogin;