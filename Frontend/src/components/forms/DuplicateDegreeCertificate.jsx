import './forms.css'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
function DuplicateDegreeCertificate() {
  return (
    <div>
      <Navbar/>
      <div>
        <form>
        <div>
        <h2>Application for the Duplicate Provisional Degree Certificate</h2>
        </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <label className="form-check-label">PG</label>
            <br />
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <label className="form-check-label">UG</label>
          </div>{/*radio div*/}
          <div>
            <label>Name:</label>
            <div className name="input-group flex-nowrap">
              <input
                type="text"
                className
                name="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div>
                <label>Usn:</label>
                <div className name="input-group flex-nowrap">
                  <input
                    type="text"
                    className
                    name="form-control1"
                    placeholder="Usn(10 characters)"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
          </div>{/*name and usn div*/}
          <div>
            <label>Branch:</label>
            <div>
              <input type="number" className name="form-control4" placeholder="Branch" aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>Semester</label>
            <div>
              <input type="number" className name="form-control3" placeholder="Semester" aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>Mobile number:</label>
            <div>
              <input type="number" className name="form-control2" placeholder="Mobile Number(10 characters)" aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>Date:</label>
            <div>
              <input type="date" />
            </div>
          </div>
          <h3>Completion of the Degree</h3>
          <div>
              <div className="form-check">
                <label>Month and Year:</label>
                <input type="month" className="monyr"/>
              </div>
            </div>
            <div>
            <label>Total Credits Earned:</label>
            <div>
              <input type="number" className name="form-control2" />
            </div>
          </div>
          <div>
            <label>Total Credits Earned:</label>
            <div>
              <input type="number" className name="form-control2"  aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>Note:</label>
            <p>
                Duplicate PDC will not be issued once the degree certificate is issued by the VTU, Belagavi.
            </p>
          </div>
          <div>
            <h3>CHECKLIST Of Enclosures</h3>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p className="form-check-label" for="flexCheckDefault">Original Police FIR regarding the lost of Original Documents</p>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p className="form-check-label" for="flexCheckDefault">Original Affidavit on Stamp paper of Rs.20</p>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p className="form-check-label" for="flexCheckDefault">Enclose copy of ALL Semesters grade cards attested by the Head of the Department</p>

            </div>
          </div>
          
              <div id="submit_Request">
              <Link to='/payment'><button type="submit" id="submit_btn">SUBMIT REQUEST</button></Link>

            </div>
        </form>
      </div>
      {/*sub*/}
    </div> //main
  );
}

export default DuplicateDegreeCertificate;
