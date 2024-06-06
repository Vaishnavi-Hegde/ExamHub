import './forms.css'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
function DuplicateAdmissionTicketForm() {
  return (
    <div>
      <Navbar/>
      <div>
        <form>
        <div>
        <h2>Application for the Transcripts</h2>
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
            <label>Mobile number:</label>
            <div>
              <input type="number" className name="form-control2" placeholder="Mobile Number(10 characters)" aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>No of Transcript Requried</label>
            <div>
              <input type="number" className name="form-control2"  aria-label="mobilno." aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div>
            <label>Note</label>
            <p>Transcript will not be issued if candidate has backlog subjects</p>
          </div>
          <div>
        
              <h3>Semester and SGPA</h3>
            </div>
            <div>
                <table id="th" className="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th>I</th>
                          <th>II</th>
                          <th>III</th>
                          <th>IV</th>
                          <th>V</th>
                          <th>VI</th>
                          <th>VII</th>
                          <th>VIII</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                      </tr>
                      
                  </tbody>
              </table>
              </div>
              <div>
            <h3>CHECKLIST Of Enclosures</h3>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <p className="form-check-label" for="flexCheckDefault">Copy of  all completed semester grade cards attested by the Head of the Department Receipt of Fees Paid for Transcripts</p>

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

export default DuplicateAdmissionTicketForm;
