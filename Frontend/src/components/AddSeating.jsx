import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';

function AddSeating() {

    return (
        <>
            <Navbar type="admin" />
            <center>
                <form class="announcement-form">

                    <div class="form-section">
                        <label for="announcement-photo">Announcement Photo</label>
                        <input type="file" id="announcement-photo" name="announcement-photo" accept="image/*" />
                    </div>
                    <button type="submit">Submit New Seating Arrangement</button>
                </form>
            </center>

            <Footer />
        </>
    );

}
export default AddSeating;