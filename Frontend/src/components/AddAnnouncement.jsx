import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';
function AddAnnoucements(){

return (<> 
<Navbar/>
<center>
<form class="announcement-form">
            <div class="form-section">
                <label for="announcement-text">Announcement Text</label>
                <textarea id="announcement-text" name="announcement-text" rows="5" placeholder="Enter your announcement title here"></textarea>
                <textarea id="announcement-text" name="announcement-text" rows="5" placeholder="Enter your announcement Discription here"></textarea>
            </div>
            <div class="form-section">
                <label for="announcement-photo">Announcement Photo</label>
                <input type="file" id="announcement-photo" name="announcement-photo" accept="image/*"/>
            </div>
            <div class="form-section">
                <label for="announcement-pdf">Announcement PDF</label>
                <input type="file" id="announcement-pdf" name="announcement-pdf" accept="application/pdf"/>
            </div>
            <button type="submit">Submit Announcement</button>
        </form>
        </center>

<Footer/>
</>
);
}
export default AddAnnoucements;