import './forms.css'
import Navbar from '../Navbar';
function TranscriptForm() {
  return (
    <div>
      <Navbar/>
      <div>
        <form>
        <div>
        <h2>Application for the Duplicate Grade Card</h2>
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
              <div>
                <label>Old Usn (if changed):</label>
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
            <label>Mobile number:</label>
            <div>
              <input type="number" className name="form-control2" placeholder="Mobile Number(10 characters)" aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <h3>Grade Card Particulars: Applied for Duplicate Grade Card</h3>
          <div>
                <table id="th" className="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th>Semester</th>
                          <th>Examination</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="month"/></td>

                      </tr>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="month"/></td>
                          
                      </tr>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="month"/></td>
                          
                      </tr>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="month"/></td>
                          
                      </tr>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="month"/></td>
                          
                      </tr>
                  </tbody>
              </table>
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
              <button type="submit" id="submit_btn">SUBMIT REQUEST</button>
            </div>
        </form>
      </div>
      {/*sub*/}
    </div> //main
  );
}

export default TranscriptForm;
