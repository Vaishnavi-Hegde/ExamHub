import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';
import { useState } from "react";
import axios from "axios";

function AddAnnoucements() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3001/api/admin/addAnnouncement", { title, description })
            .then(result => {
                console.log(result);
                if (result.data === "Announcement created successfully") {
                    alert(result.data);
                } else {
                    alert('Error Creating announcement');
                }
            })
            .catch(err => console.log(err));
    };
    return (<>
        <Navbar type="admin" />

        <center>
            <form class="announcement-form" onSubmit={handleSubmit}>
                <div class="form-section">
                    <label for="announcement-text">Announcement Text</label>
                    <textarea id="announcement-text"
                        name="announcement-text"
                        rows="5"
                        placeholder="Enter your announcement title here"
                        onChange={(event) => setTitle(event.target.value)}
                    ></textarea>
                    <textarea id="announcement-text" 
                    name="announcement-text" 
                    rows="5" 
                    placeholder="Enter your announcement Discription here"
                    onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <div class="form-section">
                    <label for="announcement-photo">Announcement Photo</label>
                    <input type="file" id="announcement-photo" name="announcement-photo" accept="image/*" />
                </div>
                <div class="form-section">
                    <label for="announcement-pdf">Announcement PDF</label>
                    <input type="file" id="announcement-pdf" name="announcement-pdf" accept="application/pdf" />
                </div>
                <button type="submit">Submit Announcement</button>
            </form>
            
        </center>

        <Footer />
    </>
    );
}
export default AddAnnoucements;