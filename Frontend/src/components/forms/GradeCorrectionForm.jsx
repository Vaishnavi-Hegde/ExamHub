import './forms.css'
import Navbar from '../Navbar';
function GradeCorrectionForm() {
  return (
    <div>
      <Navbar/>
      <div>
        <form>
        <div>
        <h2>Application for Grade Correction in Grade Card</h2>
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
              <h3>Correction to be Incorporated</h3>
            </div>
            <div>
                <table id="th" className="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th>Examination month and year</th>
                          <th>Course Code</th>
                          <th>Course Title</th>
                          <th>Grade Printed</th>
                          <th>Grade Obtained</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="month"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                      </tr>
                      <tr>
                          <td><input type="month"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                      </tr>
                      <tr>
                          <td><input type="month"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          
                      </tr>
                      <tr>
                          <td><input type="month"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                      </tr>
                      <tr>
                          <td><input type="month"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                          <td><input type="text"/></td>
                      </tr>
                  </tbody>
              </table>
              </div>
              <div>
          <h3>Checklist Of Enclousers</h3>
          <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">Original Grade Card</label>
              </div>
            </div>
            <div class="mb-3" id="choose_file">
                      <label for="formFile" class="form-label">Upload Original Grade Card</label>
                      <input class="form-control" type="file" id="formFile"/>
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

export default  GradeCorrectionForm;